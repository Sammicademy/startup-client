import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorCatch } from 'src/helpers/api.helper';
import { LessonService } from 'src/services/lesson.service';
import { LessonBodyType } from './lesson.interface';

export const createLesson = createAsyncThunk<'Success', LessonBodyType>(
	'lesson/create',
	async (body, thunkApi) => {
		try {
			const response = await LessonService.createLesson(body);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const deleteLesson = createAsyncThunk<'Success', LessonBodyType>(
	'lesson/delete',
	async (body, thunkApi) => {
		try {
			const response = await LessonService.deleteLesson(body);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const editLesson = createAsyncThunk<'Success', LessonBodyType>(
	'lesson/edit',
	async (body, thunkApi) => {
		try {
			const response = await LessonService.editLesson(body);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);
