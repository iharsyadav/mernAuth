import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* ===========================
          Header
      =========================== */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{
          background: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <h1
            className="text-xl font-bold"
            style={{ color: "var(--primary)" }}
          >
            MERN Template
          </h1>

          {/* Future:
              User Menu
              Notifications
              Search
          */}
        </div>
      </header>

      {/* ===========================
          Main Content
      =========================== */}

      <div className="mx-auto max-w-7xl p-6">
        <Outlet />
      </div>
    </main>
  );
}