import {
  UserCircle,
  Smile,
  Briefcase,
  Building,
  MapPin,
  Phone,
  Mail,
  ShieldQuestionMark,
} from "lucide-react";
import RoleButton from "./RoleButton";
export type Profile = {
  id: string;
  fullname: string;
  email: string;
  gender: string;
  job_title: string;
  department: string;
  location: string;
  phone: string;
  role: string;
};
const EmployeeCard = ({ profile }: { profile: Profile }) => {
  return (
    <div
      key={profile.id}
      className={` flex flex-col p-5 border bg-gray-100 border-gray-200 rounded-xl shadow-sm hover:scale-101 hover:shadow-md transition-transform  gap-2`}
    >
      <p
        title={profile.fullname}
        className="capitalize flex items-center gap-1 overflow-hidden overflow-ellipsis "
      >
        <UserCircle className="size-5 text-blue-700" /> fullname:{" "}
        {profile.fullname}
      </p>
      <p
        title={profile.email}
        className="flex items-center gap-1 overflow-hidden overflow-ellipsis"
      >
        <Mail className="size-5 text-blue-700" />
        <span className="capitalize">email:</span> {profile.email}
      </p>
      <p
        title={profile.gender}
        className="flex items-center gap-1 overflow-hidden overflow-ellipsis "
      >
        <Smile className="size-5 text-blue-700" /> gender: {profile.gender}
      </p>
      <p
        title={profile.job_title}
        className="capitalize flex items-center gap-1 overflow-hidden overflow-ellipsis "
      >
        <Briefcase className="size-5 text-blue-700" /> job title:{" "}
        {profile.job_title}
      </p>
      <p
        title={profile.department}
        className="capitalize flex items-center gap-1 overflow-hidden overflow-ellipsis "
      >
        <Building className="size-5 text-blue-700" /> department:{" "}
        {profile.department}
      </p>
      <p
        title={profile.location}
        className="capitalize flex items-center gap-1 overflow-hidden overflow-ellipsis "
      >
        <MapPin className="size-5 text-blue-700" /> location: {profile.location}
      </p>
      <p
        title={profile.phone}
        className="capitalize flex items-center gap-1 overflow-hidden overflow-ellipsis "
      >
        <Phone className="size-5 text-blue-700" /> phone: {profile.phone}
      </p>
      <p
        title={profile.role}
        className="capitalize flex items-center gap-1 overflow-hidden overflow-ellipsis "
      >
        <ShieldQuestionMark className="size-5 text-blue-700" /> role:{" "}
        {profile.role}
      </p>
      <RoleButton role={profile.role} id={profile.id} />
    </div>
  );
};

export default EmployeeCard;
