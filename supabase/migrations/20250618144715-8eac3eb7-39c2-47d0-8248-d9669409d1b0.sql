
-- Create the main profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  user_type TEXT CHECK (user_type IN ('donor', 'ngo')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create the donor_profiles table
CREATE TABLE public.donor_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  phone TEXT,
  donor_type TEXT,
  organization TEXT,
  address TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create the ngo_profiles table
CREATE TABLE public.ngo_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  organization_name TEXT,
  contact_name TEXT,
  phone TEXT,
  registration_number TEXT,
  capacity TEXT,
  service_area TEXT,
  address TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donor_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ngo_profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles table
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Create RLS policies for donor_profiles table
CREATE POLICY "Donors can view their own profile" ON public.donor_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Donors can update their own profile" ON public.donor_profiles
  FOR UPDATE USING (auth.uid() = id);

-- Create RLS policies for ngo_profiles table
CREATE POLICY "NGOs can view their own profile" ON public.ngo_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "NGOs can update their own profile" ON public.ngo_profiles
  FOR UPDATE USING (auth.uid() = id);

-- Update the handle_new_user function to create profiles based on user_type
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  -- Insert into main profiles table
  INSERT INTO public.profiles (id, email, full_name, user_type)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'user_type', 'donor')
  );
  
  -- Insert into specific profile table based on user_type
  IF COALESCE(NEW.raw_user_meta_data->>'user_type', 'donor') = 'donor' THEN
    INSERT INTO public.donor_profiles (id, phone, donor_type, organization, address, description)
    VALUES (
      NEW.id,
      NEW.raw_user_meta_data->>'phone',
      NEW.raw_user_meta_data->>'donor_type',
      NEW.raw_user_meta_data->>'organization',
      NEW.raw_user_meta_data->>'address',
      NEW.raw_user_meta_data->>'description'
    );
  ELSIF COALESCE(NEW.raw_user_meta_data->>'user_type', 'donor') = 'ngo' THEN
    INSERT INTO public.ngo_profiles (id, organization_name, contact_name, phone, registration_number, capacity, service_area, address, description)
    VALUES (
      NEW.id,
      NEW.raw_user_meta_data->>'organization_name',
      NEW.raw_user_meta_data->>'contact_name',
      NEW.raw_user_meta_data->>'phone',
      NEW.raw_user_meta_data->>'registration_number',
      NEW.raw_user_meta_data->>'capacity',
      NEW.raw_user_meta_data->>'service_area',
      NEW.raw_user_meta_data->>'address',
      NEW.raw_user_meta_data->>'description'
    );
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create the trigger if it doesn't exist
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
