"use client";

import { useRouter } from "next/navigation";

type Props = {
  id?: number;
};

export default function NotFound({ id }: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-center py-32 px-3 sm:px-16 bg-white dark:bg-black sm:items-start gap-4">
        <h2 className="font-extrabold text-4xl">Not Found!</h2>
        <h4>User with ID {id} not found.</h4>
        <button
          onClick={() => router.back()}
          className="cursor-pointer font-semibold px-3 py-1 bg-neutral-800 rounded-lg"
        >
          Go back
        </button>
      </main>
    </div>
  );
}
