import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

async function getWrestlerProfile(id: string) {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
  const { data, error } = await supabase
    .from("wrestler_profiles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching wrestler profile", error);
    return null;
  }

  return data;
}

export default async function WrestlerProfilePage({ params }: { params: { id: string } }) {
  const profile = await getWrestlerProfile(params.id);

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div>
      <h1>{profile.ring_name}</h1>
      <p>{profile.real_name}</p>
      <p>{profile.location}</p>
      <p>Weight: {profile.weight} lbs</p>
      <p>Height: {profile.height} in</p>
    </div>
  );
}
