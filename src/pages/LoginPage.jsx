import React, { useState } from "react";
import { useAuthStore } from "../store/authStore";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user, logout } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (!result.success) alert(result.message);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {!user ? (
        <form
          onSubmit={handleLogin}
          className="bg-slate-800 p-8 rounded-2xl shadow-lg w-80 border border-slate-700"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Sign in (Demo)
          </h2>
          <input
            type="email"
            placeholder="demo@user.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 px-3 py-2 rounded-lg bg-slate-700 text-white focus:ring-2 focus:ring-emerald-400 outline-none"
          />
          <input
            type="password"
            placeholder="password123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-3 py-2 rounded-lg bg-slate-700 text-white focus:ring-2 focus:ring-emerald-400 outline-none"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-400 font-semibold hover:opacity-90 transition cursor-pointer"
          >
            Login
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-xl mb-3">
            Welcome, <span className="text-emerald-400">{user.name}</span>
          </h2>
          <button
            onClick={logout}
            className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 font-semibold"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
