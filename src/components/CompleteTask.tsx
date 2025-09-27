"use client";
import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
export function CompleteTask({ TId }: { TId: string }) {
  const router = useRouter();
  return (
    <button
      title="logout"
      className="bg-blue-700 cursor-pointer hover:bg-blue-800 flex items-center px-4 py-2 rounded-lg not-md:p-2 not-md:text-sm text-white text-md font-semibold transition-colors"
      onClick={async () => {
        console.log(TId);
        await supabase.from("tasks").update({status:true}).eq("id", TId);
        router.refresh();
      }}
    >
      <Check className="size-5 mr-2" />
      Mark As Completed
    </button>
  );
}
