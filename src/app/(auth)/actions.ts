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

export async function signin(
  prevState: FormState | undefined,
  formData: FormData
) {
  const supabase = await createClient();
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const { error } = await supabase.auth.signInWithPassword(data);
  const errors: Errors = {};
  if (error) {
    errors.message = "Invalid email or password";
    return { errors };
  }
  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(
  prevState: FormState | undefined,
  formData: FormData
) {
  const supabase = await createClient();
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);
  const errors: Errors = {};
  if (error) {
    errors.message = error.message;
    return { errors };
  }
  revalidatePath("/", "layout");
  redirect("/");
}

export async function resetPassword(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const email = formData.get("email") as string;

  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    console.error("Error reseting password:", error.message);
    return;
  }

  revalidatePath("/", "layout");
  redirect("/");
}
