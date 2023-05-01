import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorCatch } from 'src/helpers/api.helper';
import { BooksType } from 'src/interfaces/books.interface';
import { BooksService } from 'src/services/books.service';
import { ActionBody, DeleteBooksBody } from './books.interface';

export const createBooks = createAsyncThunk<BooksType, ActionBody>(
	'books/create',
	async (body, thunkApi) => {
		try {
			const response = await BooksService.create(body);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const deleteBooks = createAsyncThunk<BooksType, DeleteBooksBody>(
	'books/delete',
	async (body, thunkApi) => {
		try {
			const response = await BooksService.delete(body.booksId);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const updateBooks = createAsyncThunk<BooksType, ActionBody>(
	'books/update',
	async (body, thunkApi) => {
		try {
			const response = await BooksService.update(body);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);
