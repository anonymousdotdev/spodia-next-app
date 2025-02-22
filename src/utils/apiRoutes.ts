import { API_BASE_URL } from "./../lib/axiosInstance";
export const API_ROUTES = {
  // Base API URL
  BASE_URL: API_BASE_URL,

  // Authentication
  AUTH: {
    LOGIN: "/token/",
    REGISTRATION: "/registration/",
  },

  // Listings
  LISTINGS: {
    SEARCH: "/listings/search/",
    FIND_BY_NAME: (name: string) => `/listing/find-by-name/${name}/`,
  },

  // Room Inventory
  ROOMS: {
    INVENTORY: (id: number) => `/rooms-inventory/${id}/`,
    CONFIRM_AVAILABILITY: "/confirm-availability/",
  },

  // Reviews
  REVIEWS: {
    GET_BY_ID: (id: number) => `/reviews/${id}/`,
  },

  // Promotions
  PROMOTIONS: {
    GET_BY_ID: (id: number) => `/promotion-details/${id}/`,
  },

  // Features & Facilities
  FEATURES: {
    GET_ALL: "/features-and-facilities/",
  },

  // Footer
  FOOTER: "/footer",
};
