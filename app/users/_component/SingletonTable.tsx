export default function SingletonTable() {
  return (
    <div>
      <table className="table-auto md:table-fixed border border-gray-300 border-collapse border-spacing-2 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 animate-pulse">
              <div className="animate-pulse bg-gray-300 h-4 w-full"></div>
            </th>
            <th className="border border-gray-300 px-4 py-2 animate-pulse">
              <div className="animate-pulse bg-gray-300 h-4 w-full"></div>
            </th>
            <th className="border border-gray-300 px-4 py-2 animate-pulse">
              <div className="animate-pulse bg-gray-300 h-4 w-full"></div>
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2 animate-pulse">
                <div className="animate-pulse bg-gray-300 h-4 w-full"></div>
              </td>
              <td className="border border-gray-300 px-4 py-2 animate-pulse">
                <div className="animate-pulse bg-gray-300 h-4 w-full"></div>
              </td>
              <td className="border border-gray-300 px-4 py-2 animate-pulse">
                <div className="animate-pulse bg-gray-300 h-4 w-full"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
