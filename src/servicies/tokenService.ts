// services/jwtService.js

import { TOKEN_KEY } from "../constants/common";
import { IUserToken } from "types/auth";

export const tokenService = {
	getToken: () => {
		const token = sessionStorage.getItem(TOKEN_KEY);
		if (token) return JSON.parse(token) as IUserToken;
		return null;
	},
	saveToken: (token: IUserToken) => {
		sessionStorage.setItem(TOKEN_KEY, JSON.stringify(token));
	},
	destroyToken: () => {
		sessionStorage.removeItem(TOKEN_KEY);
	},
};
