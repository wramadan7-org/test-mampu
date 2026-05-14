import { User } from "../_type/user";

// https://jsonplaceholder.typicode.com/users
type Props = {
  users: User[];
};

export default function TableUser({ users }: Props) {
  return (
    <div>
      <table className="table-auto md:table-fixed border border-gray-300 border-collapse border-spacing-2 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 p-2">{user.name}</td>
              <td className="border border-gray-300 p-2">{user.email}</td>
              <td className="border border-gray-300 p-2">{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
