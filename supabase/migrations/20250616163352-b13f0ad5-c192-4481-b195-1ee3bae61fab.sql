
-- Create user profiles table with user types
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  user_type TEXT NOT NULL CHECK (user_type IN ('donor', 'ngo')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create donor profiles table for additional donor information
CREATE TABLE public.donor_profiles (
  id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  phone TEXT,
  organization TEXT,
  donor_type TEXT,
  address TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create NGO profiles table for additional NGO information
CREATE TABLE public.ngo_profiles (
  id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  contact_name TEXT NOT NULL,
  organization_name TEXT NOT NULL,
  phone TEXT,
  registration_number TEXT,
  capacity TEXT,
  service_area TEXT,
  address TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create food donations table
CREATE TABLE public.food_donations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  donor_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  food_title TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  unit TEXT NOT NULL,
  food_type TEXT NOT NULL CHECK (food_type IN ('veg', 'non-veg', 'mixed')),
  suitable_for TEXT NOT NULL CHECK (suitable_for IN ('humans', 'animals', 'both')),
  pickup_time TIME NOT NULL,
  expiry_time TIME NOT NULL,
  pickup_address TEXT NOT NULL,
  additional_notes TEXT,
  image_url TEXT,
  status TEXT NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'claimed', 'picked-up', 'expired')),
  claimed_by UUID REFERENCES auth.users(id),
  claimed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donor_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ngo_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.food_donations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR ALL USING (auth.uid() = id);

-- RLS Policies for donor profiles
CREATE POLICY "Donors can manage their own profile" ON public.donor_profiles
  FOR ALL USING (auth.uid() = id);

-- RLS Policies for NGO profiles
CREATE POLICY "NGOs can manage their own profile" ON public.ngo_profiles
  FOR ALL USING (auth.uid() = id);

-- RLS Policies for food donations
CREATE POLICY "Users can view all available donations" ON public.food_donations
  FOR SELECT USING (true);

CREATE POLICY "Donors can manage their own donations" ON public.food_donations
  FOR ALL USING (auth.uid() = donor_id);

CREATE POLICY "NGOs can claim donations" ON public.food_donations
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND user_type = 'ngo'
    )
  );

-- Function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, user_type)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'user_type', 'donor')
  );
  RETURN NEW;
END;
$$;

-- Trigger to create profile when user signs up
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
