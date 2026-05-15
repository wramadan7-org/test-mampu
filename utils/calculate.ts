import { User } from "@/app/users/_type/user";

export const calculateTotal = (user: User) => {
  const totalPosts = user.posts?.length;
  const completedTodos = user?.todos?.filter((todo) => todo.completed)?.length;
  const pendingTodos = user?.todos?.filter((todo) => !todo?.completed)?.length;

  return { totalPosts, completedTodos, pendingTodos };
};
