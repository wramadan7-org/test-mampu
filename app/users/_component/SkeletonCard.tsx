export default function SkeletonCard() {
  return (
    <div className="flex flex-col w-full p-3 rounded-lg border border-neutral-400 gap-2 animate-pulse">
      <div className="flex flex-row items-center w-full gap-2">
        <div className="h-4 w-20 rounded bg-neutral-800" />
        <div className="h-4 flex-1 rounded bg-neutral-800" />
      </div>
      <div className="flex flex-row items-center w-full gap-2">
        <div className="h-4 w-20 rounded bg-neutral-800" />
        <div className="h-4 flex-1 rounded bg-neutral-800" />
      </div>
      <div className="flex flex-row items-center w-full gap-2">
        <div className="h-4 w-20 rounded bg-neutral-800" />
        <div className="h-4 flex-1 rounded bg-neutral-800" />
      </div>
    </div>
  );
}
