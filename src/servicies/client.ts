import axios from "axios";

export const apiClient = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 1000,
	headers: { "X-Custom-Header": "foobar" },
});

export const setApiAuthorizationHeader = (token: string) => {
	apiClient.defaults.headers.common["Authorization"] = "Bearer " + token;
};
