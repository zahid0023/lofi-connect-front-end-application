import { axiosInstance } from "@/lib/axios.config";
import type { LoginDto, RegisterDto } from "@/validations/auth.dto";

export const loginService = async (data: LoginDto) => {
  return await axiosInstance.post("/authorization/login", data);
};

export const registerService = async (data: RegisterDto) => {
  return await axiosInstance.post("/authorization/register", data);
};
