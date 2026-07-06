import { useState } from "react";

import useFetch from "@/shared/hooks/useFetch";
import { createUser } from "@/features/users/services/userService";

const CreateUser = ({ refreshUsers }) => {
  const { fetchData, loading } = useFetch(createUser);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetchData(formData);

    refreshUsers();

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border p-5 shadow"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full rounded border p-3"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded border p-3"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full rounded border p-3"
      />

      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        {loading ? "Creating..." : "Create User"}
      </button>
    </form>
  );
};

export default CreateUser;