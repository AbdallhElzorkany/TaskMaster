import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Image from "next/image";
export default async function Profile() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id);
  console.log(data);
  return (
    <div className=" container mx-auto py-20 bg-red-50">
      <h1 className="text-4xl font-bold">Profile</h1>
      <div>
        <div className="flex items-center gap-4">
          <Image
            src={
              data?.[0].gender === null
                ? "/male.png"
                : data?.[0].gender === "male"
                ? "/male.png"
                : "/female.png"
            }
            alt="avatar"
            width={200}
            height={200}
            className="rounded-full border-4 border-black"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">{data?.[0].name || "Name"}</h2>
            <p className="text-gray-500">{data?.[0].email || "Email"}</p>
            <p className="text-gray-500">
              {data?.[0].job_title || "Job Title"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
