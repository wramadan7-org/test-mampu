"use client";

import { useRouter } from "next/navigation";

export default function Error({ reset }: { reset: () => void }) {
  const router = useRouter();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-center py-32 px-3 sm:px-16 bg-white dark:bg-black sm:items-start gap-4">
        <h2 className="font-extrabold text-4xl">Something went wrong!</h2>
        <div className="fex flex-row space-x-3">
          <button onClick={reset} className="cursor-pointer font-semibold">
            Try again
          </button>
          <button
            onClick={() => router.back()}
            className="cursor-pointer font-semibold px-3 py-1 bg-neutral-800 rounded-lg hover:bg-neutral-900"
          >
            Go back
          </button>
        </div>
      </main>
    </div>
  );
}
