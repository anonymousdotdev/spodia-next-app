import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/services/authService";
import { useDispatch } from "react-redux";
import { setToken } from "@/store/authSlice";

export const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      dispatch(setToken(data.token));
    },
  });
};
