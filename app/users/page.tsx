import UserClient from "./_component/UserClient";

export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 },
  });
  const users = await response.json();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex items-center justify-start w-full">
          <h1>List of Users</h1>
        </div>
        <UserClient initialUsers={users} />
      </main>
    </div>
  );
}
