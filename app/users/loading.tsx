import SingletonTable from "./_component/SingletonTable";

export default function Loading() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start py-32 px-16 bg-white dark:bg-black sm:items-start  gap-2">
        <div className="flex items-center justify-start w-full">
          <h1>List of Users</h1>
        </div>
        <SingletonTable />
      </main>
    </div>
  );
}
