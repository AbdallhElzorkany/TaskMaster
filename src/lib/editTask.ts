"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export type FormState = {
  errors: {
    message: string;
  };
};
export async function editTask(
  prevState: FormState | undefined,
  formData: FormData,
) {
  const task = {
    title: formData.get("title"),
    description: formData.get("description"),
    due_date: formData.get("due_date"),
  };
  const id = formData.get("id");
  const supabase = await createClient();
  const { error } = await supabase.from("tasks").update(task).eq("id", id);
  if (error) {
    return {
      errors: {
        message: error.message,
      },
    };
  }
  revalidatePath(`/tasks/${id}`);
  redirect(`/tasks/${id}`);
}
