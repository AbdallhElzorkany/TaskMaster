import { CalendarCheck2, CircleUser } from "lucide-react";
import { Logout } from "@/components/Logout";
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex items-center sticky top-0 justify-between  border-b border-solid border-gray-200 bg-white px-10 not-md:px-4 py-4 shadow-sm">
      <div className="flex items-center gap-2">
        <CalendarCheck2 className="text-blue-700 size-6"></CalendarCheck2>
        <h2 className="text-xl font-bold tracking-tight">Task Master</h2>
      </div>

      <div className="flex items-center gap-4 not-sm:gap-1">
        <Link
          title="profile"
          href={"/profile"}
          className="bg-blue-700 hover:bg-blue-800   p-2 rounded-full"
        >
          <CircleUser className="text-white not-sm:size-5" />
        </Link>
        <Logout />
      </div>
    </header>
  );
};

export default Header;
