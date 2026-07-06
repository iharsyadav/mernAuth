import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-slate-800">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-slate-700">
          Page Not Found
        </h2>

        <p className="mt-2 text-slate-500">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          Go to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;