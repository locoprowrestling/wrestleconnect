import { getSupabaseServerClient } from "@/lib/supabase-server";

export async function generateStaticParams() {
  try {
    const supabase = getSupabaseServerClient();
    const { data } = await supabase.from("wrestler_profiles").select("id");
    return (data ?? []).map(({ id }) => ({ id: String(id) }));
  } catch {
    return [];
  }
}

export default async function WrestlerProfilePage({ params }: { params: { id: string } }) {
  const supabase = getSupabaseServerClient();
  const { data: profile } = await supabase
    .from("wrestler_profiles")
    .select("*")
    .eq("id", params.id)
    .single();

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
