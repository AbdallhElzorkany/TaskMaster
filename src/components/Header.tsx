import { CalendarCheck2, CircleUser, User } from "lucide-react";
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
    <header className="flex items-center justify-between  border-b border-solid border-gray-200 bg-white px-10 not-md:px-4 py-4 shadow-sm not-lg:flex-wrap gap-2">
      <Link
        href="/"
        className="flex items-center gap-2 w-1/2 not-lg:w-full not-lg:justify-center"
      >
        <CalendarCheck2 className="text-blue-700 size-6"></CalendarCheck2>
        <h2 className="text-xl font-bold tracking-tight">Task Master</h2>
      </Link>

      <ul className="flex items-center w-1/2 justify-end gap-4  not-lg:w-full not-lg:justify-around not-md:text-sm">
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
            {profile?.[0].fullname}
          </Link>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </header>
  );
}
