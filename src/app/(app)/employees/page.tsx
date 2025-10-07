import EmployeeCard, { Profile } from "@/components/EmployeeCard";
import { createClient } from "@/utils/supabase/server";

export default async function Employees() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profiles } = await supabase.from("profiles").select("*");
  if (profiles?.find((profile) => profile.id === user?.id)?.role !== "admin") {
    return (
      <div className="text-center capitalize text-4xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        only admin can access this page
      </div>
    );
  }

  return (
    <div className="container not-md:w-11/12 mx-auto py-5">
      <h1 className="text-4xl text-gray-800 font-bold not-md:text-3xl my-10">
        Employees
      </h1>
      <div className="bg-white min-h-130 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 rounded-xl content-start p-5   shadow-sm ">
        {profiles?.length === 0 ? (
          <p className="top-1/2 left-1/2 absolute -translate-1/2 capitalize not-sm:text-xl text-4xl font-bold text-gray-400">
            There Are No Employees
          </p>
        ) : (
          profiles?.map((profile:Profile) => <EmployeeCard key={profile.id} profile={profile} />)
        )}
      </div>
    </div>
  );
}
