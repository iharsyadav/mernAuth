import { useEffect } from "react";

import useFetch from "@/shared/hooks/useFetch";
import { getUsers } from "../services/userService";

import CreateUser from "../components/CreateUser";
import UserList from "../components/UserList";

const UsersPage = () => {
  const {
    data: users,
    loading,
    error,
    fetchData: loadUsers,
  } = useFetch(getUsers);

  useEffect(() => {
    loadUsers();
  }, []);

  if (loading) {
    return (
      <main
        className="flex min-h-screen items-center justify-center"
        style={{
          background: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <h1 className="text-xl font-semibold">Loading...</h1>
      </main>
    );
  }

  if (error) {
    return (
      <main
        className="flex min-h-screen items-center justify-center"
        style={{
          background: "var(--background)",
        }}
      >
        <h1 className="text-xl font-semibold" style={{ color: "var(--coral)" }}>
          {error}
        </h1>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen py-10"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div
          className="rounded-[var(--radius)] p-8 backdrop-blur-md"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          <h1
            className="mb-8 text-4xl font-bold"
            style={{ color: "var(--primary)" }}
          >
            Manage Users
          </h1>

          <CreateUser refreshUsers={loadUsers} />

          <div className="mt-8">
            <UserList users={users} refreshUsers={loadUsers} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default UsersPage;
