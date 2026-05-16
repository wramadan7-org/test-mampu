import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Todo } from "@/app/users/_type/todo";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 60 },
  });

  const todos: Todo[] = await response?.json();

  const filteredTodos = todos?.[0]?.id
    ? todos
        ?.filter((todo) => todo.userId === Number(id))
        ?.sort((a, b) => b.id - a.id)
    : [];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-start py-6 sm:py-12 px-3 sm:px-16 bg-white dark:bg-black sm:items-start gap-4">
        <Link
          href={`/users/${id}`}
          className="flex flex-row gap-1 items-center cursor-pointer hover:text-neutral-500 mr-auto"
        >
          <ArrowLeft size={16} />
          Back to detail
        </Link>
        <h1 className="text-3xl font-bold mr-auto">User Todos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredTodos?.map((todo) => (
            <div
              key={todo.id}
              className="border border-neutral-800 rounded-xl p-4 shadow-sm hover:shadow-md transition flex items-center justify-between gap-3"
            >
              <span className="font-medium">{todo.title}</span>
              <span
                className={`text-sm font-semibold mb-auto sm:mb-0 ${
                  todo.completed ? "text-green-400" : "text-yellow-400"
                }`}
              >
                {todo.completed ? "Completed" : "Pending"}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
