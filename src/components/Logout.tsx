"use client";
import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
export function Logout() {
  const router = useRouter();
  return (
    <button
      title="logout"
      className="hover:text-red-600 p-2  not-md:flex-col not-md:gap-0 cursor-pointer transition-colors rounded-full flex items-center gap-1"
      onClick={() => {
        supabase.auth.signOut();
        router.push("/");
      }}
    >
      <LogOut className="size-5" /> Logout
    </button>
  );
}
