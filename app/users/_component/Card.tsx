import { useRouter } from "next/navigation";
import { User } from "../_type/user";
import { ClipboardCheck, ClipboardClock, Send } from "lucide-react";
import { calculateTotal } from "@/utils/calculate";
import Link from "next/link";

type Props = {
  user: User;
  isStopPropagation?: boolean;
};

export default function Card({ user }: Props) {
  const router = useRouter();

  const { totalPosts, completedTodos, pendingTodos } = calculateTotal(user);

  return (
    <button
      type="button"
      className="flex @max-xs:flex-col-reverse flex-row w-full p-2 rounded-lg border border-neutral-400 gap-1 cursor-pointer shadow shadow-neutral-200"
      onClick={() => router.push(`/users/${user.id}`)}
    >
      <div className="flex flex-col overflow-hidden">
        <span className="font-bold text-start">{user.name}</span>
        <span className="text-sm text-start truncate min-w-0 text-neutral-400">
          {user.email}
        </span>
        <Link
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-start truncate text-blue-400 hover:underline w-fit cursor-pointer"
          onClick={(event) => event.stopPropagation()}
        >
          {user?.website}
        </Link>
      </div>
      <div className="flex flex-row ml-auto justify-end items-start gap-2">
        <div className="flex flex-row items-center gap-1 text-orange-300">
          <Send size={12} />
          <span className="text-sm">{totalPosts}</span>
        </div>
        <div className="flex flex-row items-center gap-1 text-green-300">
          <ClipboardCheck size={12} />
          <span className="text-sm">{completedTodos}</span>
        </div>
        <div className="flex flex-row items-center gap-1 text-yellow-300">
          <ClipboardClock size={12} />
          <span className="text-sm">{pendingTodos}</span>
        </div>
      </div>
    </button>
  );
}
