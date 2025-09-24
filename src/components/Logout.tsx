"use client";
import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
export function Logout() {
  const router = useRouter();
  return (
    <button title="logout"
      className="bg-red-500 text-white p-2 hover:bg-red-600 cursor-pointer transition-colors rounded-full"
      onClick={() => {
        supabase.auth.signOut();
        router.push("/login");
      }}
    >
      <LogOut className="size-5" />
    </button>
  );
}
