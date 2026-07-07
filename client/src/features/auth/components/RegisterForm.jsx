import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useFetch from "@/shared/hooks/useFetch";
import { register } from "../services/authService";
import { useAuthContext } from "../context/AuthContext";

const RegisterForm = () => {
  const navigate = useNavigate();

  const { setUser, setAccessToken } = useAuthContext();

  const { fetchData, loading, error } = useFetch(register);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
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
        Create Account
      </h1>

      <p
        className="mb-8 text-center"
        style={{ color: "var(--foreground)", opacity: 0.7 }}
      >
        Register to continue
      </p>

      {error && (
        <div className="mb-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-500">
          {error}
        </div>
      )}

      <div className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-[var(--radius-lg)] border bg-transparent p-3 outline-none"
          style={{
            borderColor: "var(--border)",
            color: "var(--foreground)",
          }}
        />

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
          {loading ? "Creating Account..." : "Register"}
        </button>

        <p
          className="text-center text-sm"
          style={{ color: "var(--foreground)" }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "var(--accent)" }}
            className="font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;