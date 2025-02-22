import axiosInstance from "@/lib/axiosInstance";

// Fetch available flights
export const fetchFlights = async (params: {
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
}) => {
  const response = await axiosInstance.get("/flights/search", { params });
  return response.data;
};

// Fetch flight details by ID
export const fetchFlightById = async (id: string) => {
  const response = await axiosInstance.get(`/flights/${id}`);
  return response.data;
};

// Book a flight
export const bookFlight = async (bookingData: {
  flightId: string;
  userId: string;
  passengers: number;
  seatClass: string;
}) => {
  const response = await axiosInstance.post("/flights/book", bookingData);
  return response.data;
};
