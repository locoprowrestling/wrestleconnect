-- Create the wrestler_profiles table
CREATE TABLE if not exists wrestler_profiles (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) not null,
    ring_name text not null,
    real_name text,
    location text,
    weight integer,
    height integer,
    styles jsonb,
    bio text,
    availability_notes text,
    socials jsonb,
    status text default 'active',
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- Create the promotions table
CREATE TABLE if not exists promotions (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) not null,
    name text not null,
    location text,
    founded_year integer,
    socials jsonb,
    description text,
    website_url text,
    logo_url text,
    banner_url text,
    verified_at timestamptz,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- Create the schools table
CREATE TABLE if not exists schools (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) not null,
    name text not null,
    location text,
    description text,
    coaches jsonb,
    contact_email text,
    website_url text,
    banner_url text,
    verified_at timestamptz,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- RLS for wrestler_profiles
ALTER TABLE wrestler_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read wrestler profiles" ON wrestler_profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON wrestler_profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" ON wrestler_profiles
  FOR UPDATE USING (auth.uid() = user_id);

-- RLS for promotions
ALTER TABLE promotions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read promotions" ON promotions
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own promotion" ON promotions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own promotion" ON promotions
  FOR UPDATE USING (auth.uid() = user_id);

-- RLS for schools
ALTER TABLE schools ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read schools" ON schools
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own school" ON schools
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own school" ON schools
  FOR UPDATE USING (auth.uid() = user_id);
