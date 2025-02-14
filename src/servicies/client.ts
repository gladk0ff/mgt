import { ROUTES } from "./../constants/routes";
import axios from "axios";
import { tokenService } from "./tokenService";

export const apiClient = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 1000,
	headers: { "X-Custom-Header": "foobar" },
});

// Перехватчик запросов для добавления токена к каждому запросу
apiClient.interceptors.request.use(
	(config) => {
		const token = tokenService.getToken();
		if (token) {
			// Добавляем токен в заголовки авторизации
			config.headers.Authorization = `Bearer ${token.accessToken}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

// Перехватчик ответов для обработки ошибок аутентификации
apiClient.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;
		console.log("error.response", error.response);
		// Проверяем, является ли ошибка связанной с истечением срока действия токена
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				const token = tokenService.getToken();
				if (!token?.refreshToken) {
					throw "Нет рефреш токена";
				}
				// Получаем новый токен через запрос на обновление
				const refreshResponse = await axios.post(`${import.meta.env.VITE_API_URL}/auth/refresh-token`, {
					refreshToken: token.refreshToken,
					expiresInMins: 120,
				});

				if (refreshResponse.data.accessToken) {
					const userToken = tokenService.getToken();
					if (userToken) {
						userToken.accessToken = refreshResponse.data.accessToken;
						userToken.refreshToken = refreshResponse.data.refreshToken;
						tokenService.saveToken(userToken);
					}

					// Повторяем оригинальный запрос с новым токеном
					return apiClient(originalRequest);
				}
			} catch (err) {
				console.error("Ошибка при обновлении токена:", err);
				// Очистка токенов и перенаправление на страницу логина
				tokenService.destroyToken();
				window.location.href = ROUTES.login; // Переход на страницу логина
			}
		}

		return Promise.reject(error);
	}
);
