import { User } from "@/app/users/_type/user";
import { create } from "zustand";

type Store = {
  initialized: boolean;
  users: User[];
  setUsers: (users: User[]) => void;
  search: string;
  setSearch: (value: string) => void;
  sortDirection: "asc" | "desc";
  setSortDirection: (value: "asc" | "desc") => void;
  sortOrder: "name" | "email" | "website" | "pending-todo" | "completed-todo";
  setSortOrder: (
    value: "name" | "email" | "website" | "pending-todo" | "completed-todo",
  ) => void;
  filter: string;
  setFilter: (value: string) => void;
  reset: () => void;
};

export const useUserStore = create<Store>((set) => ({
  initialized: false,
  users: [],
  setUsers: (users) => set({ users, initialized: true }),
  search: "",
  setSearch: (value) => set({ search: value }),
  sortDirection: "asc",
  setSortDirection: (value) => set({ sortDirection: value }),
  sortOrder: "name",
  setSortOrder: (value) => set({ sortOrder: value }),
  filter: "",
  setFilter: (value) => set({ filter: value }),
  reset: () =>
    set({ search: "", sortDirection: "asc", sortOrder: "name", filter: "" }),
}));
