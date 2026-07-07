import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useFetch from "@/shared/hooks/useFetch";
import { useAuthContext } from "../context/AuthContext";
import { login } from "../services/authService";

const LoginForm = () => {
  const navigate = useNavigate();

  const { fetchData, loading, error } = useFetch(login);

  const { setUser, setAccessToken } = useAuthContext();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetchData(formData);

      setUser(response.user);
      setAccessToken(response.accessToken);

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass w-full max-w-md rounded-[var(--radius-xl)] border p-8"
    >
      <h1 className="app-heading mb-2 text-center text-4xl">
        Welcome Back
      </h1>

      <p
        className="mb-8 text-center"
        style={{ color: "var(--foreground)", opacity: 0.7 }}
      >
        Login to continue
      </p>

      {error && (
        <div className="mb-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-500">
          {error}
        </div>
      )}

      <div className="space-y-5">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-[var(--radius-lg)] border bg-transparent p-3 outline-none"
          style={{
            borderColor: "var(--border)",
            color: "var(--foreground)",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full rounded-[var(--radius-lg)] border bg-transparent p-3 outline-none"
          style={{
            borderColor: "var(--border)",
            color: "var(--foreground)",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-[var(--radius-lg)] py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
          style={{
            background: "var(--accent)",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p
          className="text-center text-sm"
          style={{ color: "var(--foreground)" }}
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{ color: "var(--accent)" }}
            className="font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;