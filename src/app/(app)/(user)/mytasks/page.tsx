import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Status from "@/components/Status";
export default async function Tasks() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }
  const { data } = await supabase
    .from("tasks")
    .select("*")
    .eq("assignee", user.id)
    .order("status", { ascending: true });
  return (
    <div className="not-lg:w-11/12 lg:w-3/4 xl:w-3/5 mx-auto py-5 ">
      <h1 className="text-4xl text-gray-800 font-bold not-md:text-3xl my-10">
        My Tasks
      </h1>
      <div className="bg-white min-h-130  rounded-xl   shadow-sm ">
        <div className="bg-blue-600 gap-3 text-white grid grid-cols-3 relative uppercase not-sm:font-medium font-semibold p-5 rounded-t-xl">
          <div>task</div>
          <div>due date</div>
          <div>status</div>
        </div>
        {data?.length === 0 ? (
          <div className="top-1/2 left-1/2 absolute -translate-1/2 capitalize not-sm:text-xl text-4xl font-bold text-gray-400">
            You don&apos;t have any tasks
          </div>
        ) : (
          data?.map((task) => (
            <div
              key={task.id}
              className="not-sm:text-sm grid grid-cols-3 p-5 border-b-1 border-gray-200 items-center gap-3"
            >
              <Link
                href={`/mytasks/${task.id}`}
                title={task.title}
                className=" hover:underline flex items-center gap-1  capitalize overflow-hidden overflow-ellipsis w-fit max-w-11/12"
              >
                {task.title} <ExternalLink className="size-4" />
              </Link>
              <div>{format(new Date(task.due_date), " MMM dd, yyyy")}</div>
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
