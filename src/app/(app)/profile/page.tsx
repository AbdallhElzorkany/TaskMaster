import { createClient } from "@/utils/supabase/server";

import Image from "next/image";
import Link from "next/link";
import { Pencil } from "lucide-react";
export default async function Profile() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id);
  return (
    <div className="not-lg:w-11/12 lg:w-3/4 xl:w-3/5 mx-auto py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl text-gray-800 font-bold not-md:text-3xl">
          Profile
        </h1>
        <Link
          href={`/profile/edit`}
          className="bg-blue-700 hover:bg-blue-800 flex items-center px-4 py-2 rounded-lg not-md:p-2 not-md:text-sm text-white text-lg font-semibold"
        >
          <Pencil className="mr-2 not-md:size-5 not-md:mr-1" />
          Edit Profile
        </Link>
      </div>
      <div className="mt-10 bg-white py-10 rounded-lg shadow-md">
        <div className="flex items-center not-md:justify-center px-10 pb-10 gap-10 border-b-2 border-gray-200 not-sm:flex-col not-sm:text-center">
          <Image
            src={
              data?.[0].gender === null
                ? "/male.png"
                : data?.[0].gender.match(/male/i)
                ? "/male.png"
                : "/female.png"
            }
            alt="avatar"
            width={600}
            height={600}
            className="size-45 rounded-full border-4 border-gray-300 "
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-gray-800">
              {data?.[0].fullname || "Name"}
            </h2>
            <p className="text-lg text-gray-500 font-semibold">
              {data?.[0].email || "Email"}
            </p>
            <p className="text-lg text-gray-500 font-semibold">
              {data?.[0].job_title || "Job Title"}
            </p>
          </div>
        </div>
        <div className="px-10 pt-5">
          <h3 className="text-2xl text-gray-800 font-semibold mb-5">Details</h3>
          <div className="grid grid-cols-2 not-sm:grid-cols-1 gap-x-20 not-md:gap-x-5 gap-y-5">
            <div>
              <h4 className="text-md font-semibold text-gray-600 mb-1">
                Full Name
              </h4>
              <input
                type="text"
                value={data?.[0].fullname || ""}
                disabled
                className="w-full bg-gray-100 px-4 py-2 rounded border border-gray-300 text-gray-600 "
              />
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-600 mb-1">
                Email
              </h4>
              <input
                type="text"
                value={data?.[0].email || ""}
                disabled
                className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-gray-600 w-full"
              />
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-600 mb-1">
                Department
              </h4>
              <input
                type="text"
                value={data?.[0].department || ""}
                disabled
                className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-gray-600 w-full"
              />
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-600 mb-1">
                Job Title
              </h4>
              <input
                type="text"
                value={data?.[0].job_title || ""}
                disabled
                className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-gray-600 w-full"
              />
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-600 mb-1">
                Gender
              </h4>
              <input
                type="text"
                value={data?.[0].gender || ""}
                disabled
                className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-gray-600 w-full"
              />
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-600 mb-1">
                Phone
              </h4>
              <input
                type="text"
                value={data?.[0].phone || ""}
                disabled
                className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-gray-600 w-full"
              />
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-600 mb-1">
                Location
              </h4>
              <input
                type="text"
                value={data?.[0].location || ""}
                disabled
                className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-gray-600 w-full"
              />
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-600 mb-1">Role</h4>
              <input
                type="text"
                value={data?.[0].role || ""}
                disabled
                className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-gray-600 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
