import { CircleSmall } from "lucide-react";
const Status = ({ status }: { status: boolean }) => {
  return (
    <div
      className={`px-3 not-sm:px-2 py-1 rounded-full w-fit border text-xs font-semibold flex items-center ${
        status
          ? "text-green-500 border-green-500"
          : "text-yellow-500 border-yellow-500"
      }`}
    >
      <CircleSmall className="size-4" />
      {status ? "Completed" : "Pending"}
    </div>
  );
};

export default Status;
