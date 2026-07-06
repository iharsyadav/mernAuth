import EditUser from "@/features/users/components/EditUser";
import DeleteUser from "@/features/users/components/DeleteUser";

const UserCard = ({ user, refreshUsers }) => {
  return (
    <div className="rounded-xl border p-5 shadow">
      <h2 className="text-xl font-bold">{user.name}</h2>

      <p className="mt-1 text-gray-600">{user.email}</p>

      <div className="mt-4 flex gap-3">
        <EditUser user={user} refreshUsers={refreshUsers} />

        <DeleteUser id={user._id} refreshUsers={refreshUsers} />
      </div>
    </div>
  );
};

export default UserCard;
