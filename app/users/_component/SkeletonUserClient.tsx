// SkeletonUserClient.tsx

import SkeletonCard from "./SkeletonCard";
import SkeletonTable from "./SkeletonTable";

export default function SkeletonUserClient() {
  return (
    <div className="w-full flex flex-col flex-1 gap-5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 animate-pulse">
        <div className="h-10 w-full sm:max-w-sm rounded-md bg-neutral-800" />
        <div className="h-10 w-full sm:w-10 rounded-md bg-neutral-800" />
      </div>
      <SkeletonTable />
      <div className="flex sm:hidden flex-col gap-2 items-center justify-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
}
