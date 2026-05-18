import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

async function getSchoolProfile(id: string) {
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
    .from("schools")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching school profile", error);
    return null;
  }

  return data;
}

export default async function SchoolProfilePage({ params }: { params: { id: string } }) {
  const profile = await getSchoolProfile(params.id);

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.location}</p>
      <a href={profile.website_url} target="_blank" rel="noreferrer">
        Website
      </a>
    </div>
  );
}
