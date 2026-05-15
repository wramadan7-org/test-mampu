export default function SkeletonInfoItem() {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="flex items-center justify-center bg-neutral-800 min-w-12 min-h-12 rounded-lg w-12 h-12">
        <div className="h-5 w-5 animate-pulse" />
      </div>
      <div className="flex flex-col w-full">
        <div className="h-5 w-16 animate-pulse bg-neutral-800" />
        <div className="mt-2 h-5 w-28 animate-pulse bg-neutral-800" />
      </div>
    </div>
  );
}
