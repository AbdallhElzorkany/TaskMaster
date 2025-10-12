import { Logout } from "@/components/Logout";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import Header from "@/components/Header";
export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div>
      <Header />
    </div>
  );
}
