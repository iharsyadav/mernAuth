import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <Outlet />
    </div>
  );
}