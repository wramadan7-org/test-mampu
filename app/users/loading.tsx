import SkeletonUserClient from "./_component/SkeletonUserClient";

export default function Loading() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-between py-6 sm:py-12 px-3 sm:px-16 bg-white dark:bg-black sm:items-start gap-4">
        <div className="flex items-center justify-start w-full">
          <div className="text-2xl font-bold animate-pulse bg-neutral-800 h-4 w-32"></div>
        </div>
        <SkeletonUserClient />
      </main>
    </div>
  );
}
