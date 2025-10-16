"use client";
import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
export default function DeleteTask({ TId }: { TId: string }) {
  const router = useRouter();
  return (
    <button
      title="Delete"
      className="bg-red-500 cursor-pointer hover:bg-red-700 flex items-center p-2 rounded-sm not-md:p-2 not-md:text-sm text-white text-md font-semibold transition-colors"
      onClick={async () => {
        await supabase.from("tasks").delete().eq("id", TId);
        router.push("/tasks");
      }}
    >
      <Trash2 className="size-5" />
    </button>
  );
}
