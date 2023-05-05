import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BooksType } from 'src/interfaces/books.interface';
import { CartInitialState } from './cart.interface';

const initialState: CartInitialState = {
	books: [],
	courses: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<BooksType>) => {
			const newArr = [...state.books, action.payload];
			state.books = newArr;
		},
	},
});

export const cartReducer = cartSlice.reducer;
export const cartSliceAction = cartSlice.actions;
