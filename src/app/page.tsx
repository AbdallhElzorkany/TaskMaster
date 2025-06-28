import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
export default async function Home() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getSession();
  console.log(data, error?.message);
  return (
    <div>
      <h1>Home</h1>
      {data ? (
        <div>
          <Link href="/login">login</Link>
        </div>
      ) : (
        data
      )}
    </div>
  );
}
