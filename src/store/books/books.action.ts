import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorCatch } from 'src/helpers/api.helper';
import { BooksType } from 'src/interfaces/books.interface';
import { BooksService } from 'src/services/books.service';
import { ActionBody } from './books.interface';

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
