import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Save } from "lucide-react";
export default async function EditProfile() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id);
  console.log(data);
  return (
    <div className="not-lg:w-11/12 lg:w-3/4 xl:w-3/5 mx-auto py-20">
      <div className="text-center">
        <h1 className="text-4xl text-gray-800 font-bold not-md:text-3xl">
          Edit Profile
        </h1>
        <p className="text-gray-600 font-semibold text-xl">
          Update your personal information
        </p>
      </div>
      <div className="mt-10 bg-white py-10 rounded-lg shadow-md">
        <div className="px-10">
          <h3 className="text-3xl text-gray-800 font-bold mb-11 text-center">
            Details
          </h3>
          <form className="flex flex-col gap-y-10">
            <div className="grid grid-cols-2  not-sm:grid-cols-1 gap-x-20 not-md:gap-x-5 gap-y-5">
              <div>
                <label className="text-md font-semibold text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={
                    data?.[0].fullname
                      .split(" ")
                      .map(
                        (word: string) =>
                          word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ") || ""
                  }
                  name="fullname"
                  className="w-full bg-gray-100 px-4 py-2 rounded border border-gray-300 text-black "
                />
              </div>
              <div>
                <label className="text-md font-semibold text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="text"
                  value={data?.[0].email || ""}
                  disabled
                  className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-gray-600 w-full"
                />
              </div>
              <div>
                <label className="text-md font-semibold text-gray-600 mb-1">
                  Department
                </label>
                <input
                  type="text"
                  value={
                    data?.[0].department
                      .split(" ")
                      .map(
                        (word: string) =>
                          word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ") || ""
                  }
                  name="department"
                  className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-black w-full"
                />
              </div>
              <div>
                <label className="text-md font-semibold text-gray-600 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  name="job_title"
                  value={
                    data?.[0].job_title
                      .split(" ")
                      .map(
                        (word: string) =>
                          word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ") || ""
                  }
                  className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-black w-full"
                />
              </div>
              <div>
                <label className="text-md font-semibold text-gray-600 mb-1">
                  Gender
                </label>
                <input
                  type="text"
                  value={
                    data?.[0].gender.charAt(0).toUpperCase() +
                    data?.[0].gender.slice(1)
                  }
                  name="gender"
                  className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-black w-full"
                />
              </div>
              <div>
                <label className="text-md font-semibold text-gray-600 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={data?.[0].phone || ""}
                  className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-black w-full"
                />
              </div>
              <div>
                <label className="text-md font-semibold text-gray-600 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={
                    data?.[0].location
                      .split(" ")
                      .map(
                        (word: string) =>
                          word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ") || ""
                  }
                  name="location"
                  className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-black w-full"
                />
              </div>
              <div>
                <label className="text-md font-semibold text-gray-600 mb-1">
                  Role
                </label>
                <input
                  type="text"
                  value={
                    data?.[0].role
                      .split(" ")
                      .map(
                        (word: string) =>
                          word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ") || ""
                  }
                  disabled
                  className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-gray-600 w-full"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full hover:bg-blue-800 cursor-pointer disabled:bg-blue-800 bg-blue-700 flex items-center px-4 py-2 justify-center rounded-lg not-md:p-2 not-md:text-sm text-white text-lg font-semibold"
            >
              <Save className="mr-2" />
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
