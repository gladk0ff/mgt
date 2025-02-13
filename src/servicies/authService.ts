import { IUserToken } from "types/auth";
import { apiClient } from "./client";

export const authService = {
	login: async ({ username, password }: { username: string; password: string }) => {
		try {
			const response = await apiClient.post<IUserToken>("auth/login", {
				username,
				password,
				expiresInMins: 3, //для теста
			});
			const token = response.data;
			return token;
		} catch (error: { response: { data: { message: string } } }) {
			throw error.response?.data?.message ?? "Что-то пошло не так.";
		}
	},
};
