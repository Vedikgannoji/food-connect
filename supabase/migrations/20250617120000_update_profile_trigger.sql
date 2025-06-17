
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
