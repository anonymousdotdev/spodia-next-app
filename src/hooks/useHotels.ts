import { useQuery, useMutation } from "@tanstack/react-query";
import {
  searchHotels,
  findHotelByName,
  getRoomInventory,
  confirmRoomAvailability,
  getReviews,
  getPromotionDetails,
  getFeatures,
  getFooterData,
} from "@/services/hotelServices";

// Hook to search hotels
export const useSearchHotels = (params: {
  location?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
}) => {
  return useQuery({
    queryKey: ["hotels", params],
    queryFn: () => searchHotels(params),
    enabled: !!params.location, // Only run query if location is provided
  });
};

// Hook to find a hotel by name
export const useFindHotelByName = (name: string) => {
  return useQuery({
    queryKey: ["hotelByName", name],
    queryFn: () => findHotelByName(name),
    enabled: !!name, // Only fetch if name is provided
  });
};

// Hook to get room inventory
export const useRoomInventory = (id: number) => {
  return useQuery({
    queryKey: ["roomInventory", id],
    queryFn: () => getRoomInventory(id),
    enabled: !!id,
  });
};

// Hook to confirm room availability (Mutation since it's a POST request)
export const useConfirmRoomAvailability = () => {
  return useMutation({
    mutationKey: ["confirmRoomAvailability"],
    mutationFn: confirmRoomAvailability,
  });
};

// Hook to get reviews by ID
export const useReviews = (id: number) => {
  return useQuery({
    queryKey: ["reviews", id],
    queryFn: () => getReviews(id),
    enabled: !!id,
  });
};

// Hook to get promotion details by ID
export const usePromotionDetails = (id: number) => {
  return useQuery({
    queryKey: ["promotionDetails", id],
    queryFn: () => getPromotionDetails(id),
    enabled: !!id,
  });
};

// Hook to get all features & facilities
export const useFeatures = () => {
  return useQuery({
    queryKey: ["features"],
    queryFn: getFeatures,
  });
};

// Hook to get footer data
export const useFooterData = () => {
  return useQuery({
    queryKey: ["footerData"],
    queryFn: getFooterData,
  });
};
