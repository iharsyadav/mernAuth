import UserCard from "@/features/users/components/UserCard";

const UserList = ({ users, refreshUsers }) => {
  if (!users?.length) {
    return (
      <div className="rounded-xl border border-dashed p-8 text-center text-gray-500">
        No users found.
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {users.map((user) => (
        <UserCard key={user._id} user={user} refreshUsers={refreshUsers} />
      ))}
    </div>
  );
};

export default UserList;
