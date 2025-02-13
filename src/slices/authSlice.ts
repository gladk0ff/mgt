import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tokenService } from "servicies/tokenService";
import { IUserToken } from "types/auth";
import { authService } from "servicies/authService";

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
>("auth/login", async (data, thunkAPI) => {
	try {
		const userToken = authService.login(data);
		return userToken;
	} catch (error: unknown) {
		return thunkAPI.rejectWithValue({
			message: error as string,
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
