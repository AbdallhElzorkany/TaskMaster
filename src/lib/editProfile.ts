"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
export type Errors = {
  message?: string;
};
export type FormState = {
  errors: Errors;
};
export async function editProfile(
  prevState: FormState | undefined,
  formData: FormData,
) {
  const supabase = await createClient();
  const data = {
    fullname: formData.get("fullname") as string,
    department: formData.get("department") as string,
    job_title: formData.get("job_title") as string,
    gender: formData.get("gender") as string,
    phone: formData.get("phone") as string,
    location: formData.get("location") as string,
  };
  const id = formData.get("id") as string;

  const { error } = await supabase.from("profiles").update(data).eq("id", id);
  if (error) {
    return {
      errors: {
        message: id,
      },
    };
  }
  revalidatePath("/profile");
  redirect("/profile");
}
