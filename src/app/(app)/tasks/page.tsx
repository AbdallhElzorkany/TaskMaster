import { createClient } from "@/utils/supabase/server";
import { format } from "date-fns";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import Status from "@/components/Status";

export default async function Tasks() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id);

  let tasks;
  let profiles: { id: string; fullname: string }[] | null;
  if (profile?.[0].role === "admin") {
    const { data } = await supabase
      .from("tasks")
      .select("*")
      .order("status", { ascending: true });
    const { data: assignee } = await supabase.from("profiles").select("*");
    tasks = data;
    profiles = assignee;
  } else {
    const { data } = await supabase
      .from("tasks")
      .select("*")
      .eq("assignee", user?.id)
      .order("status", { ascending: true });
    tasks = data;
  }
  return (
    <div className="not-lg:w-[97%] lg:w-3/4 xl:w-3/5 mx-auto py-5 ">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl text-gray-800 font-bold not-md:text-3xl my-10">
          My Tasks
        </h1>
        {profile?.[0].role === "admin" && (
          <Link
            href={`/tasks/new`}
            className="bg-blue-700 hover:bg-blue-800 flex items-center px-4 py-2 rounded-lg not-md:p-2 not-md:text-sm text-white text-lg font-semibold"
          >
            <PlusCircle className="mr-1 not-md:size-5 not-md:mr-1" />
            New Task
          </Link>
        )}
      </div>
      <div className="bg-white min-h-130  rounded-xl   shadow-sm ">
        <div
          className={`bg-blue-600 gap-3 not-sm:gap-1 text-white grid ${
            profile?.[0].role === "admin" ? "grid-cols-4" : "grid-cols-3"
          } relative uppercase not-sm:font-normal not-sm:text-sm font-semibold p-5 not-sm:px-2 not-sm:py-3 rounded-t-xl`}
        >
          <p>task</p>
          <p>due date</p>
          {profile?.[0].role === "admin" && <p>assignee</p>}
          <p>status</p>
        </div>
        {tasks?.length === 0 ? (
          <p className="top-1/2 left-1/2 absolute -translate-1/2 capitalize not-sm:text-xl text-4xl font-bold text-gray-400">
            You don&apos;t have any tasks
          </p>
        ) : (
          tasks?.map((task) => (
            <div
              key={task.id}
              className={`not-sm:text-sm grid ${
                profile?.[0].role === "admin" ? "grid-cols-4" : "grid-cols-3"
              } p-5 border-b-1 border-gray-200 items-center not-sm:gap-1  gap-3 not-sm:px-2 not-sm:py-3`}
            >
              <Link
                href={`/tasks/${task.id}`}
                title={task.title}
                className=" hover:underline flex items-center gap-1  capitalize max-w-5/6 w-fit  overflow-hidden overflow-ellipsis "
              >
                {task.title}
              </Link>
              <p>{format(new Date(task.due_date), " MMM dd, yyyy")}</p>
              {profile?.[0].role === "admin" && (
                <p>{profiles?.find((p) => p.id === task.assignee)?.fullname}</p>
              )}
              <div>
                <Status status={task.status} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
