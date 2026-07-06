import { useState } from "react";

import useFetch from "@/shared/hooks/useFetch";
import { updateUser } from "@/features/users/services/userService";

const EditUser = ({ user, refreshUsers }) => {
  const { fetchData, loading } = useFetch(updateUser);

  const [editing, setEditing] = useState(false);

  const [name, setName] = useState(user.name);

  const handleUpdate = async () => {
    await fetchData(user._id, {
      name,
    });

    refreshUsers();
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="flex gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded border p-2"
        />

        <button
          onClick={handleUpdate}
          disabled={loading}
          className="rounded bg-green-500 px-3 py-1 text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save"}
        </button>

        <button
          onClick={() => {
            setEditing(false);
            setName(user.name);
          }}
          className="rounded bg-gray-500 px-3 py-1 text-white"
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setEditing(true)}
      className="rounded bg-yellow-500 px-3 py-1 text-white"
    >
      Edit
    </button>
  );
};

export default EditUser;
