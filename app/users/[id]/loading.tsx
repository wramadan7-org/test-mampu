import SkeletonInfoItem from "./_component/SkeletonItem";

export default function Loading() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main
        className="flex flex-1 w-full max-w-7xl flex-col py-6 sm:py-12 px-3 sm:px-16 bg-white dark:bg-black gap-4
          animate-pulse"
      >
        <div className="h-4 w-28 rounded " />
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <div className="rounded-full h-28 w-28 bg-neutral-800" />
          <div className="flex flex-col gap-2 w-full max-w-sm">
            <div className="h-8 w-52 rounded bg-neutral-800" />
            <div className="h-4 w-24 rounded bg-neutral-900" />
            <div className="h-4 w-40 rounded bg-neutral-900" />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full border border-neutral-800 shadow shadow-neutral-800 rounded-lg p-4">
          <div className="h-6 w-40 rounded bg-neutral-800" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[1, 2].map((_, index) => (
              <SkeletonInfoItem key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full border border-neutral-800 shadow shadow-neutral-800 rounded-lg p-4">
          <div className="h-6 w-32 rounded bg-neutral-800" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[1, 2].map((_, index) => (
              <SkeletonInfoItem key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full border border-neutral-800 shadow shadow-neutral-800 rounded-lg p-4">
          <div className="h-6 w-28 rounded bg-neutral-800" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[1, 2, 3].map((_, index) => (
              <SkeletonInfoItem key={index} />
            ))}
          </div>
          <div className="h-px w-full bg-neutral-800" />
          <div className="border border-neutral-800 rounded-lg p-4 flex flex-col">
            <div className="h-5 w-24 rounded bg-neutral-800" />
            <div className="h-4 w-full rounded bg-neutral-900" />
          </div>
        </div>
      </main>
    </div>
  );
}
