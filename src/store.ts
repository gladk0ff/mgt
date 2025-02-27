import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "slices/counterSlice";
import { authReducer } from "slices/authSlice";
import { usersReducer } from "slices/usersSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		users: usersReducer,
		auth: authReducer,
	},
	devTools: process.env.NODE_ENV === "development",
});

// вывод типо состояния и Dispatch из самого хранилища
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
