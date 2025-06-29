"use client";
import {useSession} from "@/components/UserProvider";
export default function Client() {
  const session = useSession();
  return (
    <div>
      <h1>client</h1>
      <div>{session?.user?.email}</div>
    </div>
  );
}
