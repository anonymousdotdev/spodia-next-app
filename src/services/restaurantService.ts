import axiosInstance from "@/lib/axiosInstance";

// Fetch all restaurants
export const fetchRestaurants = async () => {
  const response = await axiosInstance.get("/restaurants");
  return response.data;
};

// Fetch restaurant details by ID
export const fetchRestaurantById = async (id: string) => {
  const response = await axiosInstance.get(`/restaurants/${id}`);
  return response.data;
};

// Search restaurants by location and cuisine
export const searchRestaurants = async (params: {
  location?: string;
  cuisine?: string;
}) => {
  const response = await axiosInstance.get("/restaurants/search", { params });
  return response.data;
};

// Book a table
export const bookRestaurant = async (bookingData: {
  restaurantId: string;
  userId: string;
  date: string;
  time: string;
  guests: number;
}) => {
  const response = await axiosInstance.post("/restaurants/book", bookingData);
  return response.data;
};
