const TestPage = () => {
  return (
    <main
      className="flex min-h-screen items-center justify-center"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div
        className="w-full max-w-md rounded-[var(--radius)] p-10 text-center backdrop-blur-md"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        <h1
          className="text-4xl font-bold"
          style={{ color: "var(--primary)" }}
        >
          Test Page
        </h1>

        <p
          className="mt-3"
          style={{ color: "var(--foreground)", opacity: 0.7 }}
        >
          This page is used for testing routes, components, and features.
        </p>

        <button
          className="mt-8 rounded-[var(--radius)] px-6 py-3 font-semibold transition"
          style={{
            background: "var(--accent)",
            color: "var(--primary)",
          }}
        >
          Run Test
        </button>
      </div>
    </main>
  );
};

export default TestPage;