import { createSlice } from '@reduxjs/toolkit';
import { createBooks } from './books.action';
import { BooksInitialState } from './books.interface';

const initialState: BooksInitialState = {
	isLoading: false,
	error: null,
	books: [],
};

export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		clearBooksError: state => {
			state.error = null;
		},
		startCreateBooksLoading: state => {
			state.isLoading = true;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(createBooks.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(createBooks.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(createBooks.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});

export const booksReducer = booksSlice.reducer;
export const booksSliceAction = booksSlice.actions;
