import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import AddNewTask from "@/components/AddNewTask";
export default async function AddTask() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id);
  if (profile?.[0].role !== "admin") {
    return (
      <div className="text-center capitalize text-4xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        only admin can access this page
      </div>
    );
  }
  const { data } = await supabase.from("profiles").select("*");
  const profiles: { id: string; fullname: string }[] = data || [];
  return (
    <div className="not-lg:w-11/12 lg:w-3/4 xl:w-1/2 mx-auto py-20">
      <div className="text-center">
        <h1 className="text-4xl text-gray-800 font-bold not-md:text-3xl">
          Add Task
        </h1>
        <p className="text-gray-600 font-semibold text-xl">
          Fill in the details below to create a new task
        </p>
      </div>
      <div className="mt-10 bg-white py-5 rounded-lg shadow-md">
        <AddNewTask data={profiles} />
      </div>
    </div>
  );
}
