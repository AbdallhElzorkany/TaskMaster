import { createClient } from "@/utils/supabase/server";
export default async function Profile() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const profile = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id);
  console.log(profile);
  return <div>id : {profile?.data?.[0]?.email} </div>;
}
