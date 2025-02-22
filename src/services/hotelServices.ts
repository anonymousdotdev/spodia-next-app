import { apiCall } from "@/lib/apiCall";
import { API_ROUTES } from "@/utils/apiRoutes";

// Search Listings
export const searchHotels = async (params: {
  location?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
}) => {
  return apiCall({ endpoint: API_ROUTES.LISTINGS.SEARCH, params });
};

// Find Hotel by Name
export const findHotelByName = async (name: string) => {
  return apiCall({ endpoint: API_ROUTES.LISTINGS.FIND_BY_NAME(name) });
};

// Get Room Inventory
export const getRoomInventory = async (id: number) => {
  return apiCall({ endpoint: API_ROUTES.ROOMS.INVENTORY(id) });
};

// Confirm Room Availability (No token required)
export const confirmRoomAvailability = async (payload: {
  hotelId: number;
  checkIn: string;
  checkOut: string;
  guests: number;
}) => {
  return apiCall({
    endpoint: API_ROUTES.ROOMS.CONFIRM_AVAILABILITY,
    method: "POST",
    data: payload,
  });
};

// Get Reviews by ID
export const getReviews = async (id: number) => {
  return apiCall({ endpoint: API_ROUTES.REVIEWS.GET_BY_ID(id) });
};

// Get Promotion Details by ID
export const getPromotionDetails = async (id: number) => {
  return apiCall({ endpoint: API_ROUTES.PROMOTIONS.GET_BY_ID(id) });
};

// Get All Features & Facilities
export const getFeatures = async () => {
  return apiCall({ endpoint: API_ROUTES.FEATURES.GET_ALL });
};

// Get Footer Data
export const getFooterData = async () => {
  return apiCall({ endpoint: API_ROUTES.FOOTER });
};
