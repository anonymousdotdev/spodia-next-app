import axiosInstance from "@/lib/axiosInstance";

// Login API
export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post("/auth/login", credentials);
  return response.data;
};

// Register API
export const registerUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post("/auth/register", userData);
  return response.data;
};
