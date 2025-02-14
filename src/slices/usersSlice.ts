import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPagination } from "types/common";
import { IUser, IUserList } from "types/users";
import { usersService } from "servicies/userServicie";

interface UsersState {
	users: IUser[];
	pagination: IPagination | null;
	isLoading: boolean;
	total: number;
	error: string | null;
}

const initialState: UsersState = {
	users: [],
	pagination: null,
	total: 0,
	isLoading: false,
	error: null,
};

export const getUsers = createAsyncThunk<IUserList, IPagination | undefined, { rejectValue: { message: string } }>(
	"users/get",
	async (data, thunkAPI) => {
		try {
			const users = usersService.getAll(data);
			return users;
		} catch (error: unknown) {
			return thunkAPI.rejectWithValue({
				message: error as string,
			});
		}
	}
);

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUsers.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getUsers.fulfilled, (state, action) => {
			state.isLoading = false;
			state.error = null;
			state.users = action.payload.users;
			state.pagination = {
				limit: action.payload.limit,
				skip: action.payload.skip,
			};
			state.total = action.payload.total;
		});
		builder.addCase(getUsers.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload?.message || null;
		});
	},
});

export const { reducer: usersReducer } = usersSlice;
