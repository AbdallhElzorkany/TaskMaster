import { CircleSmall } from "lucide-react";
const Status = ({ status }: { status: boolean }) => {
  return (
    <div
      className={`px-3 not-sm:px-2 py-1 rounded-full w-fit border text-xs font-semibold flex items-center ${
        status
          ? "text-green-600 border-green-600 bg-green-100"
          : "text-blue-600 border-blue-600 bg-blue-100"
      }`}
    >
      <CircleSmall className="size-4 mr-1" />
      {status ? "Completed" : "Pending"}
    </div>
  );
};

export default Status;
