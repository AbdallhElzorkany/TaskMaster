"use client";
import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
export function Logout() {
  const router = useRouter();
  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded"
      onClick={() => {
        supabase.auth.signOut();
        router.refresh();
      }}
    >
      Logout
    </button>
  );
}
