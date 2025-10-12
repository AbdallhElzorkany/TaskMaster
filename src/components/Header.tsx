import {
  CalendarCheck2,
  CircleUser,
  User,
  UserPlusIcon,
  Code2,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { Logout } from "@/components/Logout";
import Link from "next/link";
export default async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id);
  return (
    <header className="flex items-center justify-between  border-b border-solid border-gray-200 bg-white px-10 not-md:px-4 py-4 shadow-sm not-md:flex-wrap gap-2">
      <Link
        href="/"
        className="flex items-center gap-2 not-md:mx-auto not-md:justify-center hover:text-blue-700 transition-colors"
      >
        <CalendarCheck2 className="text-blue-700 size-6"></CalendarCheck2>
        <h2 className="text-xl font-bold tracking-tight">Task Master</h2>
      </Link>
      {user ? (
        <ul className="flex items-center w-1/2 justify-end gap-4  not-md:w-full not-md:justify-evenly ">
          {profile?.[0].role === "admin" && (
            <li>
              <Link
                title="employees"
                href="/employees"
                className="flex items-center gap-1 transition-colors hover:text-blue-700 not-md:flex-col not-md:gap-0"
              >
                <User className="size-5" /> Employees
              </Link>
            </li>
          )}
          <li>
            <Link
              title="tasks"
              href="/tasks"
              className="flex items-center gap-1 transition-colors hover:text-blue-700 not-md:flex-col not-md:gap-0"
            >
              <CalendarCheck2 className="size-5" /> Tasks
            </Link>
          </li>

          <li>
            <Link
              title="profile"
              href={"/profile"}
              className="flex items-center gap-1 transition-colors hover:text-blue-700 not-md:flex-col not-md:gap-0"
            >
              <CircleUser className="size-5" />
              {profile?.[0].fullname?profile?.[0].fullname:"My Profile"}
            </Link>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      ) : (
        <ul className="flex items-center w-1/2 justify-end gap-6 not-md:w-full not-md:justify-evenly ">
          <li className="flex items-center gap-2">
            <Link
              title="features"
              href={"#features"}
              className="flex items-center gap-1 transition-colors hover:text-blue-700"
            >
              <Code2 className="size-5" />
              Features
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <Link
              title="signup"
              href={"/signup"}
              className="flex items-center gap-1 transition-colors hover:text-blue-700"
            >
              <UserPlusIcon className="size-5" />
              Register
            </Link>
            /
            <Link
              title="login"
              href={"/login"}
              className="flex items-center gap-1 transition-colors hover:text-blue-700 "
            >
              <User className="size-5" />
              Login
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
