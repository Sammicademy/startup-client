import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorCatch } from 'src/helpers/api.helper';
import { SectionType } from 'src/interfaces/instructor.interface';
import { SectionService } from 'src/services/section.service';
import { SectionBodyType } from './section.interface';

export const createSection = createAsyncThunk<'Success', SectionBodyType>(
	'section/create',
	async (body, thunkApi) => {
		try {
			const response = await SectionService.createSection(body);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const deleteSection = createAsyncThunk<'Success', SectionBodyType>(
	'section/delete',
	async (body, thunkApi) => {
		try {
			const response = await SectionService.deleteSection(body);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const editSection = createAsyncThunk<'Success', SectionBodyType>(
	'section/edit',
	async (body, thunkApi) => {
		try {
			const response = await SectionService.editSection(body);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const getSection = createAsyncThunk<SectionType[], SectionBodyType>(
	'section/get',
	async (body, thunkApi) => {
		try {
			const response = await SectionService.getSection(body);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);
