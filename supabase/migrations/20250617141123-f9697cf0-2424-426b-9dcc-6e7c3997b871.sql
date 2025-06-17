
-- Create profiles table (main user profiles)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  user_type TEXT CHECK (user_type IN ('donor', 'ngo')) DEFAULT 'donor',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create donor_profiles table
CREATE TABLE IF NOT EXISTS public.donor_profiles (
  id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  phone TEXT,
  donor_type TEXT,
  organization TEXT,
  address TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create ngo_profiles table
CREATE TABLE IF NOT EXISTS public.ngo_profiles (
  id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  organization_name TEXT,
  contact_name TEXT,
  phone TEXT,
  email TEXT,
  registration_number TEXT,
  capacity TEXT,
  service_area TEXT,
  address TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donor_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ngo_profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Create RLS policies for donor_profiles
CREATE POLICY "Donors can view their own profile" ON public.donor_profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Donors can update their own profile" ON public.donor_profiles
  FOR UPDATE USING (auth.uid() = id);

-- Create RLS policies for ngo_profiles
CREATE POLICY "NGOs can view their own profile" ON public.ngo_profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "NGOs can update their own profile" ON public.ngo_profiles
  FOR UPDATE USING (auth.uid() = id);

-- Create the handle_new_user function
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
    INSERT INTO public.donor_profiles (id)
    VALUES (NEW.id);
  ELSIF COALESCE(NEW.raw_user_meta_data->>'user_type', 'donor') = 'ngo' THEN
    INSERT INTO public.ngo_profiles (id, contact_name, organization_name)
    VALUES (
      NEW.id,
      COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
      COALESCE(NEW.raw_user_meta_data->>'organization_name', '')
    );
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger to call the function after user creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
