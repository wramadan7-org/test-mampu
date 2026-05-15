import { useRouter } from "next/navigation";
import { User } from "../_type/user";

type Props = {
  user: User;
};

export default function Card({ user }: Props) {
  const router = useRouter();

  return (
    <button
      type="button"
      className="flex flex-col w-full p-2 rounded-lg border border-neutral-400 gap-1 cursor-pointer"
      onClick={() => router.push(`/users/${user.id}`)}
    >
      <div className="flex flex-row items-center w-full gap-1">
        <div className="flex flex-row items-center justify-between w-19">
          <span className="w-16 font-bold text-start">Name</span>
          <span>:</span>
        </div>
        <span>{user.name}</span>
      </div>
      <div className="flex flex-row items-center w-full gap-1">
        <div className="flex flex-row items-center justify-between w-19">
          <span className="w-16 font-bold text-start">Email</span>
          <span>:</span>
        </div>
        <span>{user.email}</span>
      </div>
      <div className="flex flex-row items-center w-full gap-1">
        <div className="flex flex-row items-center justify-between w-19">
          <span className="w-16 font-bold text-start">Website</span>
          <span>:</span>
        </div>
        <span>{user.website}</span>
      </div>
    </button>
  );
}
