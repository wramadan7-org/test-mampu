import { useRouter } from "next/navigation";
import { User } from "../_type/user";
import { calculateTotal } from "@/utils/calculate";

type Props = {
  users: User[];
  isLoading?: boolean;
  isStopPropagation?: boolean;
};
export default function TableUser({ users, isLoading }: Props) {
  const router = useRouter();

  return (
    <div className="overflow-x-auto hidden md:block">
      <div className="overflow-hidden rounded-xl border border-neutral-400">
        <table className="w-full table-auto md:table-fixed">
          <thead className="bg-neutral-700">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Website</th>
              <th className="p-3 text-center">Total Posts</th>
              <th className="p-3 text-center">Completed Todos</th>
              <th className="p-3 text-center">Pending Todos</th>
            </tr>
          </thead>
          <tbody>
            {isLoading &&
              Array.from({ length: 5 })?.map((_, index) => (
                <tr key={index} className="border-t border-neutral-200">
                  <td className="p-3">
                    <div className="animate-pulse bg-neutral-800 h-4 w-full"></div>
                  </td>
                  <td className="p-3">
                    <div className="animate-pulse bg-neutral-800 h-4 w-full"></div>
                  </td>
                  <td className="p-3">
                    <div className="animate-pulse bg-neutral-800 h-4 w-full"></div>
                  </td>
                  <td className="p-3">
                    <div className="animate-pulse bg-neutral-800 h-4 w-full"></div>
                  </td>
                  <td className="p-3">
                    <div className="animate-pulse bg-neutral-800 h-4 w-full"></div>
                  </td>
                  <td className="p-3">
                    <div className="animate-pulse bg-neutral-800 h-4 w-full"></div>
                  </td>
                </tr>
              ))}
            {!isLoading &&
              users?.length > 0 &&
              users?.map((user) => {
                const { totalPosts, completedTodos, pendingTodos } =
                  calculateTotal(user);

                return (
                  <tr
                    key={user.id}
                    className="border-t border-neutral-400 hover:bg-neutral-900 transition-colors hover:cursor-pointer odd:bg-neutral-800"
                    role="button"
                    onMouseEnter={() => router.prefetch(`/users/${user.id}`)}
                    onClick={() => router.push(`/users/${user.id}`)}
                  >
                    <td className="p-3">{user.name}</td>
                    <td className="p-3 truncate">{user.email}</td>
                    <td className="p-3">{user.website}</td>
                    <td className="p-3 text-center">{totalPosts}</td>
                    <td className="p-3 text-center">{completedTodos}</td>
                    <td className="p-3 text-center">{pendingTodos}</td>
                  </tr>
                );
              })}
            {!isLoading && !users?.length && (
              <tr>
                <td colSpan={3} className="p-6 text-center text-neutral-500">
                  There is no data to display
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
