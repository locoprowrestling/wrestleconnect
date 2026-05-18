import { getSupabaseServerClient } from "@/lib/supabase-server";

export async function generateStaticParams() {
  try {
    const supabase = getSupabaseServerClient();
    const { data } = await supabase.from("promotions").select("id");
    return (data ?? []).map(({ id }) => ({ id: String(id) }));
  } catch {
    return [];
  }
}

export default async function PromotionProfilePage({ params }: { params: { id: string } }) {
  const supabase = getSupabaseServerClient();
  const { data: profile } = await supabase
    .from("promotions")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.location}</p>
      <p>Founded: {profile.founded_year}</p>
      <a href={profile.website_url} target="_blank" rel="noreferrer">
        Website
      </a>
    </div>
  );
}
