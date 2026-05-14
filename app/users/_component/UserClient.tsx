"use client";

import { User } from "../_type/user";
import TableUser from "./Table";

type Props = {
  initialUsers?: User[];
};

export default function UserClient({ initialUsers }: Props) {
  return (
    <div>
      <TableUser users={initialUsers || []} />
    </div>
  );
}
