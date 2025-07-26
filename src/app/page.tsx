import { Logout } from "@/components/Logout";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div>
      <h1>Home</h1>
      {user ? <Logout /> : <Link href="/login">login</Link>}
    </div>
  );
}
