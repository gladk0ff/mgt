import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			// Свиду можно мутировать данные но под капотом работает библиотека immer
			// и она видит на основании чего далет новый имутабельный стейт
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload || 0;
		},
	},
});

// действия
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const { reducer: counterReducer, selectors: counterSelectors } = counterSlice;
