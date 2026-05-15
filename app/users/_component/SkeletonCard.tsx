export default function SkeletonCard() {
  return (
    <div className="flex @max-xs:flex-col-reverse flex-row w-full p-2 rounded-lg border border-neutral-400 gap-1 cursor-pointer shadow shadow-neutral-200 animate-pulse">
      <div className="flex flex-col gap-2">
        <div className="h-5 w-4/5 rounded bg-neutral-800" />
        <div className="h-5 w-3/5 rounded bg-neutral-800" />
        <div className="h-5 w-38 rounded bg-neutral-800" />
      </div>
      <div className="flex flex-row ml-auto justify-end items-start gap-2">
        <div className="flex flex-row items-center gap-1 w-10 h-4 animate-pulse bg-neutral-800"></div>
        <div className="flex flex-row items-center gap-1 w-10 h-4 animate-pulse bg-neutral-800"></div>
        <div className="flex flex-row items-center gap-1 w-10 h-4 animate-pulse bg-neutral-800"></div>
      </div>
    </div>
  );
}
