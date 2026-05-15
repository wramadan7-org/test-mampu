// SkeletonTable.tsx

export default function SkeletonTable() {
  return (
    <div className="overflow-x-auto hidden sm:block animate-pulse">
      <div className="overflow-hidden rounded-xl border border-neutral-400">
        <table className="w-full table-auto md:table-fixed">
          <thead className="bg-neutral-700">
            <tr>
              <th className="p-3 text-left">
                <div className="h-4 w-16 rounded bg-neutral-800" />
              </th>
              <th className="p-3 text-left">
                <div className="h-4 w-16 rounded bg-neutral-800" />
              </th>
              <th className="p-3 text-left">
                <div className="h-4 w-16 rounded bg-neutral-800" />
              </th>
              <th className="p-3 text-left">
                <div className="h-4 w-16 rounded bg-neutral-800" />
              </th>
              <th className="p-3 text-left">
                <div className="h-4 w-16 rounded bg-neutral-800" />
              </th>
              <th className="p-3 text-left">
                <div className="h-4 w-16 rounded bg-neutral-800" />
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr
                key={index}
                className="border-t border-neutral-400 odd:bg-neutral-800"
              >
                <td className="p-3">
                  <div className="h-4 w-full rounded bg-neutral-800" />
                </td>
                <td className="p-3">
                  <div className="h-4 w-full rounded bg-neutral-800" />
                </td>
                <td className="p-3">
                  <div className="h-4 w-full rounded bg-neutral-800" />
                </td>
                <td className="p-3">
                  <div className="h-4 w-full rounded bg-neutral-800" />
                </td>
                <td className="p-3">
                  <div className="h-4 w-full rounded bg-neutral-800" />
                </td>
                <td className="p-3">
                  <div className="h-4 w-full rounded bg-neutral-800" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
