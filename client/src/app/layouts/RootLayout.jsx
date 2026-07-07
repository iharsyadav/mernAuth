import { Outlet } from "react-router-dom";

import ThemeToggle from "@/shared/component/ui/ThemeToggle";

export default function RootLayout() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Top Left Blob */}
      <div
        className="blob bg-coral"
        style={{
          width: "34rem",
          height: "34rem",
          top: "-10rem",
          left: "-10rem",
        }}
      />

      {/* Bottom Right Blob */}
      <div
        className="blob bg-mint"
        style={{
          width: "34rem",
          height: "34rem",
          right: "-10rem",
          bottom: "-10rem",
        }}
      />

      <Outlet />

      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
}
