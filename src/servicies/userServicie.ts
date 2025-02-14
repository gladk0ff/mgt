import { IPagination } from "types/common";
import { apiClient } from "./client";
import { IUserList } from "types/users";

export const usersService = {
	getAll: async (data?: IPagination) => {
		try {
			const response = await apiClient.get<IUserList>("users", { params: { ...(data || { limit: 10 }) } });
			return response.data;
		} catch (err) {
			console.log("usersService error", err);
			throw "Не удалось загрузуить пользователей";
		}
	},
	getCurrentUser: async () => {},
};
