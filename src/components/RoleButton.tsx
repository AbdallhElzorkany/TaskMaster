"use client";
import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { ShieldUserIcon } from "lucide-react";
export default function RoleButton({ role, id }: { role: string; id: string }) {
  const router = useRouter();
  return (
    <button
      className="p-2 w-full capitalize hover:cursor-pointer bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
      onClick={async () => {
        await supabase
          .from("profiles")
          .update({ role: role === "admin" ? "employee" : "admin" })
          .eq("id", id);
        router.refresh();
      }}
    >
      <ShieldUserIcon className="size-5 text-white" />
      {role === "admin" ? "Change role to employee" : "Change role to admin"}
    </button>
  );
}
