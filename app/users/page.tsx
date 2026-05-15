import { Metadata } from "next";
import UserClient from "./_component/UserClient";
import { User } from "./_type/user";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `List User`,
    description: `Page to view user list`,
  };
}

export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    // next: { revalidate: 60 },
  });
  const users: User[] = await response.json();
  users?.sort((a, b) => {
    const first = a["name"]?.toLowerCase();
    const second = b["name"]?.toLowerCase();

    return first?.localeCompare(second);
  });

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-between py-6 sm:py-12 px-3 sm:px-16 bg-white dark:bg-black sm:items-start gap-4">
        <div className="flex items-center justify-start w-full">
          <h1 className="text-2xl font-bold">List of Users</h1>
        </div>
        <UserClient initialUsers={users ?? []} />
      </main>
    </div>
  );
}
