"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export type FormState = {
  errors: {
    message: string;
  };
};
export async function addTask(
  prevState: FormState | undefined,
  formData: FormData
) {
  const task = {
    title: formData.get("title"),
    description: formData.get("description"),
    due_date: formData.get("due_date"),
    status: false,
    assignee: formData.get("assignee"),
  };
  const supabase = await createClient();
  const { error } = await supabase.from("tasks").insert(task);
  if (error) {
    return {
      errors: {
        message: error.message,
      },
    };
  }
  revalidatePath("/tasks");
  redirect("/tasks");
}
