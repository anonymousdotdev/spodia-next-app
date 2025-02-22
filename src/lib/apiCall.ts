import axiosInstance from "@/lib/axiosInstance";
import axios from "axios";
import Cookies from "js-cookie";
import { API_BASE_URL } from "@/lib/axiosInstance";

interface ApiCallParams {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
  params?: any;
  isToken?: boolean; // Pass true if the API requires authentication
}

export const apiCall = async ({
  endpoint,
  method = "GET",
  data,
  params,
  isToken = false,
}: ApiCallParams) => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    // Attach token if required
    if (isToken) {
      const token = Cookies.get("authToken");
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
    }

    // Create a separate axios instance for public requests
    const axiosClient = isToken
      ? axiosInstance
      : axios.create({ baseURL: API_BASE_URL, headers });

    const response = await axiosClient({
      url: endpoint,
      method,
      data,
      params,
    });

    return response.data;
  } catch (error: any) {
    console.error("API Call Error:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};
