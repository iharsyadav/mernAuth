import { Outlet } from "react-router-dom";

import ThemeToggle from "@/shared/component/ui/ThemeToggle";

export default function RootLayout() {
  return (
    <>
      <Outlet />

      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
    </>
  );
}