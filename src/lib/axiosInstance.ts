import axios from "axios";
import Cookies from "js-cookie";

// API base URL
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://backend.spodia.com/api";

// Create axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token to request headers
axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
