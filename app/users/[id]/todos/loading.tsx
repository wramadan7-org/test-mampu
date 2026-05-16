import { ArrowLeft } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-center py-6 sm:py-12 px-3 sm:px-16 bg-white dark:bg-black sm:items-start gap-4">
        <div className="flex flex-row gap-1 items-center mr-auto animate-pulse">
          <ArrowLeft size={16} />
          <div className="h-4 w-24 rounded bg-neutral-300 dark:bg-neutral-800" />
        </div>
        <div className="h-9 w-52 rounded bg-neutral-300 dark:bg-neutral-800 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="border border-neutral-800 rounded-xl p-4 shadow-sm flex items-center justify-between gap-3 animate-pulse"
            >
              <div className="flex flex-col gap-2 flex-1">
                <div className="h-4 w-3/4 rounded bg-neutral-300 dark:bg-neutral-800" />
                <div className="h-4 w-1/2 rounded bg-neutral-300 dark:bg-neutral-800" />
              </div>
              <div className="h-5 w-20 rounded-full bg-neutral-300 dark:bg-neutral-800" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
