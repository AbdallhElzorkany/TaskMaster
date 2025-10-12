"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useActionState } from "react";
import { LoaderCircle, Save } from "lucide-react";
import { supabase } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { editProfile, FormState } from "@/lib/editProfile";
type UserData = {
  id: string;
  email: string;
  fullname: string;
  department: string;
  job_title: string;
  gender: string;
  phone: string;
  location: string;
  role: string;
};
export default function EditProfile() {
  const initialState: FormState = {
    errors: {
      message: "",
    },
  };
  const [state, formAction, isPending] = useActionState(
    editProfile,
    initialState
  );
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [data, setData] = useState<UserData[] | null>(null);
  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        setUser(data.user);
      } else {
        router.push("/login");
      }
    }
    async function getUserData() {
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user?.id);
      setData(data);
    }
    getUser();
    if (user?.id) {
      getUserData();
    }
  }, [user?.id, router]);
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
      <div className="mt-10 bg-white py-5 rounded-lg shadow-md">
        <div className="px-5">
          <p
            className={` p-2 text-lg rounded-lg mb-5 text-center ${
              state.errors.message ? "text-red-600 bg-red-200" : "text-white"
            }`}
          >
            {state.errors.message || "place holder"}
          </p>
          <form action={formAction} className="flex flex-col gap-y-10">
            <div className="grid grid-cols-2  not-sm:grid-cols-1 gap-x-10 not-md:gap-x-5 gap-y-5">
              <input
                type="hidden"
                className="opacity-0"
                name="id"
                readOnly
                value={data?.[0].id || ""}
              />
              <div>
                <label
                  htmlFor="fullname"
                  className="text-md font-semibold text-gray-600 mb-1"
                >
                  Full Name
                </label>
                <input
                  id="fullname"
                  type="text"
                  defaultValue={data?.[0].fullname || ""}
                  onChange={() => {}}
                  name="fullname"
                  className="w-full bg-gray-100 px-4 py-2 rounded border border-gray-300 text-black "
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-md font-semibold text-gray-600 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  value={data?.[0].email || ""}
                  disabled
                  onChange={() => {}}
                  className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-gray-600 w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="department"
                  className="text-md font-semibold text-gray-600 mb-1"
                >
                  Department
                </label>
                <input
                  id="department"
                  type="text"
                  defaultValue={data?.[0].department || ""}
                  onChange={() => {}}
                  name="department"
                  className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-black w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="job_title"
                  className="text-md font-semibold text-gray-600 mb-1"
                >
                  Job Title
                </label>
                <input
                  onChange={() => {}}
                  id="job_title"
                  type="text"
                  name="job_title"
                  defaultValue={data?.[0].job_title || ""}
                  className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-black w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="text-md font-semibold text-gray-600 mb-1"
                >
                  Gender
                </label>
                <input
                  onChange={() => {}}
                  id="gender"
                  type="text"
                  defaultValue={data?.[0].gender || ""}
                  name="gender"
                  className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-black w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-md font-semibold text-gray-600 mb-1"
                >
                  Phone
                </label>
                <input
                  onChange={() => {}}
                  id="phone"
                  type="text"
                  name="phone"
                  defaultValue={data?.[0].phone || ""}
                  className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-black w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="text-md font-semibold text-gray-600 mb-1"
                >
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  defaultValue={data?.[0].location || ""}
                  onChange={() => {}}
                  name="location"
                  className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-black w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="text-md font-semibold text-gray-600 mb-1"
                >
                  Role
                </label>
                <input
                  id="role"
                  type="text"
                  value={data?.[0].role || ""}
                  disabled
                  className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-gray-600 w-full"
                />
              </div>
            </div>
            <button
              disabled={isPending}
              type="submit"
              className="w-full hover:bg-blue-800 cursor-pointer disabled:bg-blue-800 bg-blue-700 flex items-center px-4 py-2 justify-center rounded-lg not-md:p-2 not-md:text-sm text-white text-lg font-semibold"
            >
              {isPending ? (
                <LoaderCircle className="mr-2 animate-spin" />
              ) : (
                <Save className="mr-2" />
              )}
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
