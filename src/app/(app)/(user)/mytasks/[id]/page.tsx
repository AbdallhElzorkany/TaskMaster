import Status from "@/components/Status";
import { createClient } from "@/utils/supabase/server";
import { ChevronLeft } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CompleteTask } from "@/components/CompleteTask";
export default async function Task({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }
  const { data: task } = await supabase.from("tasks").select("*").eq("id", id);
  const { data: assignee } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", task?.[0].assignee);
  return (
    <div className="not-lg:w-11/12 lg:w-3/4 xl:w-3/5 mx-auto py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-gray-800 font-bold not-md:text-3xl">
          Task Details
        </h1>
        <Link
          href={`/mytasks`}
          className="bg-blue-700 hover:bg-blue-800 flex items-center px-4 py-2 rounded-lg not-md:p-2 not-md:text-sm text-white text-lg font-semibold"
        >
          <ChevronLeft className="mr-1 not-md:size-5 not-md:mr-1" />
          Back
        </Link>
      </div>
      <div className="mt-10 bg-white py-10 rounded-lg shadow-md">
        <div className=" px-10 pb-5 gap-10 border-b-2 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            {task?.[0].title}
          </h2>
        </div>
        <div
          className={`flex gap-10 justify-between px-10 py-10 not-md:flex-col`}
        >
          <div className="flex-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Description
            </h3>
            <p className="text-gray-600">{task?.[0].description}</p>
          </div>
          <div className="flex-2 flex flex-col gap-4">
            {assignee?.[0].id !== user?.id && (
              <div>
                <h4 className="text-md font-bold text-gray-600 mb-1">
                  Assigned To
                </h4>
                <p>{assignee?.[0].fullname}</p>
              </div>
            )}
            <div>
              <h4 className="text-md font-bold text-gray-600 mb-1">Due Date</h4>
              <p>{format(new Date(task?.[0].due_date), " MMMM dd, yyyy")}</p>
            </div>
            <div>
              <h4 className="text-md font-bold text-gray-600 mb-1">Status</h4>
              <Status status={task?.[0].status} />
            </div>
          </div>
        </div>
        {!task?.[0].status && (
          <div className="flex justify-end px-10 ">
            <CompleteTask TId={task?.[0].id} />
          </div>
        )}
      </div>
    </div>
  );
}
