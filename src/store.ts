import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counterSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
	devTools: true,
});

// вывод типо состояния и Dispatch из самого хранилища
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
