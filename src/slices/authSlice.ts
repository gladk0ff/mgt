import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tokenService } from "servicies/token";
import { apiClient } from "servicies/client";
import { IUserToken } from "types/auth";

interface AuthState {
	token: IUserToken | null;
	isAuthCheking: boolean;
	login: {
		isLoading: boolean;
		error: string | null;
	};
}

const initialState: AuthState = {
	token: null,
	isAuthCheking: true,
	login: {
		isLoading: false,
		error: null,
	},
};

// Асинхронная action для логина
export const loginUser = createAsyncThunk<
	IUserToken,
	{ username: string; password: string },
	{ rejectValue: { message: string } }
>("auth/login", async ({ username, password }, thunkAPI) => {
	try {
		const response = await apiClient.post<IUserToken>("auth/login", {
			username,
			password,
			expiresInMins: 3, //для теста
		});
		const token = response.data;
		return token;
	} catch (error: { response: { data: { message: string } } }) {
		return thunkAPI.rejectWithValue({
			message: error.response?.data?.message ?? "Что-то пошло не так.",
		});
	}
});

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		chekAuth: (state) => {
			const token = tokenService.getToken();
			if (token) {
				state.token = token;
			}
			state.isAuthCheking = false;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loginUser.pending, (state) => {
			state.login.isLoading = true;
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.login.isLoading = false;
			state.login.error = null;
			state.token = action.payload;
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			state.login.isLoading = false;
			state.login.error = action.payload?.message || null;
		});
	},
});

export const { reducer: authReducer, actions: authActions } = authSlice;
