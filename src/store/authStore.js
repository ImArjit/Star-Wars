import { create } from "zustand";

const TOKEN_EXPIRY_TIME = 60 * 1000;
const REFRESH_THRESHOLD = 15 * 1000;

export const useAuthStore = create((set, get) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  expiresAt: Number(localStorage.getItem("expiresAt")) || null,
  isRefreshing: false,

  login: async (email, password) => {
    if (email === "demo@user.com" && password === "password123") {
      const token = generateFakeJWT();
      const expiresAt = Date.now() + TOKEN_EXPIRY_TIME;
      const user = { email, name: "Demo User" };

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("expiresAt", expiresAt);

      set({ token, user, expiresAt });
      get().startTokenRefreshCycle();

      return { success: true };
    }
    return { success: false, message: "Invalid credentials" };
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("expiresAt");
    set({ token: null, user: null, expiresAt: null });
  },

  startTokenRefreshCycle: () => {
    const interval = setInterval(() => {
      const { expiresAt, isRefreshing } = get();
      if (!expiresAt) return clearInterval(interval);

      const timeLeft = expiresAt - Date.now();
      if (timeLeft < REFRESH_THRESHOLD && !isRefreshing) {
        get().refreshToken();
      }

      if (timeLeft <= 0) {
        clearInterval(interval);
        get().logout();
      }
    }, 1000);
  },

  refreshToken: () => {
    set({ isRefreshing: true });
    setTimeout(() => {
      const newToken = generateFakeJWT();
      const newExpiry = Date.now() + TOKEN_EXPIRY_TIME;

      localStorage.setItem("token", newToken);
      localStorage.setItem("expiresAt", newExpiry);

      set({ token: newToken, expiresAt: newExpiry, isRefreshing: false });
      console.log("Silent token refreshed!");
    }, 1000);
  },
}));

function generateFakeJWT() {
  return (
    "fake_" +
    Math.random().toString(36).substring(2) +
    "." +
    btoa(Date.now().toString())
  );
}
