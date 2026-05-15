"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { User } from "../_type/user";
import TableUser from "./Table";
import { useUserStore } from "@/store/user.store";
import { Check, ListFilter } from "lucide-react";
import useDebounce from "@/hooks/useDebounce";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
import Dropdown from "./Dropdown";

type Props = {
  initialUsers: User[];
};

export default function UserClient({ initialUsers }: Props) {
  const initialized = useUserStore((state) => state.initialized);
  const users = useUserStore((state) => state.users);
  const setUsers = useUserStore((state) => state.setUsers);
  const reset = useUserStore((state) => state.reset);
  const search = useUserStore((state) => state.search);
  const setSearch = useUserStore((state) => state.setSearch);
  const sortDirection = useUserStore((state) => state.sortDirection);
  const setSortDirection = useUserStore((state) => state.setSortDirection);
  const sortOrder = useUserStore((state) => state.sortOrder);
  const setSortOrder = useUserStore((state) => state.setSortOrder);
  const filterCore = useUserStore((state) => state.filter);
  const setFilterCore = useUserStore((state) => state.setFilter);

  const filterRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (!initialized) {
      setUsers(initialUsers);
    }
  }, [initialized, initialUsers, setUsers]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      reset();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [reset]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsOpenFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpenFilter = () => setIsOpenFilter((prev) => !prev);

  const handleChangeSort = (value: "asc" | "desc") => {
    setSortDirection(value);
    setIsOpenFilter(false);
  };

  const handleChangeSortBy = (
    value: "name" | "email" | "website" | "pending-todo" | "completed-todo",
  ) => {
    setSortOrder(value);
    setIsOpenFilter(false);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    setTimeout(() => {
      setIsLoading(true);
    }, 300);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const filteredUsers = useMemo(() => {
    if (!users?.length) return [];

    let result = users.filter((user) => {
      const keyword = debouncedSearch.toLowerCase();

      return (
        user.name.toLowerCase().includes(keyword) ||
        user.email.toLowerCase().includes(keyword)
      );
    });

    if (filterCore === "pending-todo") {
      result = result.filter(
        (user) =>
          (user.todos?.filter((todo) => !todo.completed).length || 0) > 0,
      );
    }

    if (filterCore === "completed-todo") {
      result = result.filter(
        (user) =>
          (user.todos?.filter((todo) => todo.completed).length || 0) > 0,
      );
    }

    return [...result].sort((a, b) => {
      if (sortOrder === "pending-todo") {
        const pendingTodoA =
          a.todos?.filter((todo) => !todo.completed).length || 0;
        const pendingTodoB =
          b.todos?.filter((todo) => !todo.completed).length || 0;

        return sortDirection === "asc"
          ? pendingTodoA - pendingTodoB
          : pendingTodoB - pendingTodoA;
      }

      if (sortOrder === "completed-todo") {
        const completedTodoA =
          a.todos?.filter((todo) => todo.completed).length || 0;

        const completedTodoB =
          b.todos?.filter((todo) => todo.completed).length || 0;

        return sortDirection === "asc"
          ? completedTodoA - completedTodoB
          : completedTodoB - completedTodoA;
      }

      const orderA = String(a[sortOrder] || "").toLowerCase();
      const orderB = String(b[sortOrder] || "").toLowerCase();

      return sortDirection === "asc"
        ? orderA.localeCompare(orderB)
        : orderB.localeCompare(orderA);
    });
  }, [users, debouncedSearch, filterCore, sortDirection, sortOrder]);

  return (
    <div className="w-full flex flex-col flex-1 gap-5 relative">
      {isOpenFilter && (
        <div className="absolute w-full h-full bg-transparent top-1/2 left-1/2 transform -translate-1/2"></div>
      )}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <input
          id="search"
          name="search"
          type="search"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by name, email..."
          className="border border-neutral-400 rounded-md p-2 w-full sm:max-w-sm text-sm sm:text-base"
        />
        <div className="flex flex-row w-full gap-2 items-center justify-end">
          <Dropdown
            value={filterCore}
            onChange={setFilterCore}
            options={[
              {
                label: "All",
                value: "",
              },
              {
                label: "Completed Todos",
                value: "completed-todo",
              },
              {
                label: "Pending Todos",
                value: "pending-todo",
              },
            ]}
          />
          <div ref={filterRef} className="relative w-fit">
            <button
              type="button"
              className="rounded-lg p-2 border border-neutral-200 cursor-pointer flex flex-row w-full items-center justify-center gap-2"
              onClick={handleOpenFilter}
            >
              <ListFilter size={16} />
            </button>
            {isOpenFilter && (
              <div className="absolute z-10 top-[110%] left-1/2 transform bg-neutral-900 rounded-lg transition-all duration-75 text-sm py-1 w-full sm:w-fit shadow shadow-neutral-200 min-w-xs right-full translate-x-[-94.5%]">
                <ul className="space-y-0.5">
                  <li className="flex items-center justify-between w-full gap-2">
                    <div className="flex flex-1 w-full border border-neutral-800" />
                    <span className="text-xs">Sort Direction</span>
                    <div className="flex flex-1 w-full border border-neutral-800" />
                  </li>
                  <li className="hover:bg-neutral-800">
                    <button
                      type="button"
                      className={`w-full cursor-pointer p-2 flex gap-2 items-center justify-between min-w-32 ${sortDirection === "asc" && "bg-neutral-700"}`}
                      onClick={() => handleChangeSort("asc")}
                    >
                      Ascending {sortDirection === "asc" && <Check size={12} />}
                    </button>
                  </li>
                  <li className="hover:bg-neutral-800">
                    <button
                      type="button"
                      className={`w-full cursor-pointer p-2 flex gap-2 items-center justify-between min-w-32 ${sortDirection === "desc" && "bg-neutral-700"}`}
                      onClick={() => handleChangeSort("desc")}
                    >
                      Descending{" "}
                      {sortDirection === "desc" && <Check size={12} />}
                    </button>
                  </li>
                  <li className="flex items-center justify-between w-full gap-2">
                    <div className="flex flex-1 w-full border border-neutral-800" />
                    <span className="text-xs">Sort Order</span>
                    <div className="flex flex-1 w-full border border-neutral-800" />
                  </li>
                  <li className="hover:bg-neutral-800">
                    <button
                      type="button"
                      className={`w-full cursor-pointer p-2 flex gap-2 items-center justify-between min-w-32 ${sortOrder === "name" && "bg-neutral-700"}`}
                      onClick={() => handleChangeSortBy("name")}
                    >
                      Name {sortOrder === "name" && <Check size={12} />}
                    </button>
                  </li>
                  <li className="hover:bg-neutral-800">
                    <button
                      type="button"
                      className={`w-full cursor-pointer p-2 flex gap-2 items-center justify-between min-w-32 ${sortOrder === "email" && "bg-neutral-700"}`}
                      onClick={() => handleChangeSortBy("email")}
                    >
                      Email {sortOrder === "email" && <Check size={12} />}
                    </button>
                  </li>
                  <li className="hover:bg-neutral-800">
                    <button
                      type="button"
                      className={`w-full cursor-pointer p-2 flex gap-2 items-center justify-between min-w-32 ${sortOrder === "website" && "bg-neutral-700"}`}
                      onClick={() => handleChangeSortBy("website")}
                    >
                      Website {sortOrder === "website" && <Check size={12} />}
                    </button>
                  </li>
                  <li className="hover:bg-neutral-800">
                    <button
                      type="button"
                      className={`w-full cursor-pointer p-2 flex gap-2 items-center justify-between min-w-32 ${sortOrder === "pending-todo" && "bg-neutral-700"}`}
                      onClick={() => handleChangeSortBy("pending-todo")}
                    >
                      Pending Todo{" "}
                      {sortOrder === "pending-todo" && <Check size={12} />}
                    </button>
                  </li>
                  <li className="hover:bg-neutral-800">
                    <button
                      type="button"
                      className={`w-full cursor-pointer p-2 flex gap-2 items-center justify-between min-w-32 ${sortOrder === "completed-todo" && "bg-neutral-700"}`}
                      onClick={() => handleChangeSortBy("completed-todo")}
                    >
                      Completed Todo{" "}
                      {sortOrder === "completed-todo" && <Check size={12} />}
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <TableUser
        users={initialized ? filteredUsers : initialUsers}
        isLoading={isLoading}
      />
      <div className="flex md:hidden flex-col gap-2 items-center justify-center @container">
        {isLoading &&
          Array.from({ length: 5 })?.map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        {initialized
          ? !isLoading &&
            filteredUsers?.length > 0 &&
            filteredUsers?.map((user) => <Card key={user.id} user={user} />)
          : !isLoading &&
            initialUsers?.length > 0 &&
            initialUsers?.map((user) => <Card key={user.id} user={user} />)}
      </div>
    </div>
  );
}
