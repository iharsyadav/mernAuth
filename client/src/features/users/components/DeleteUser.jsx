import useFetch from "@/shared/hooks/useFetch";
import { deleteUser } from "@/features/users/services/userService";

const DeleteUser = ({ id, refreshUsers }) => {
  const { fetchData, loading } = useFetch(deleteUser);

  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this user?",
    );

    if (!isConfirmed) return;

    await fetchData(id);

    refreshUsers();
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="rounded bg-red-500 px-3 py-1 text-white disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeleteUser;
