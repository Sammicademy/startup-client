import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorCatch } from 'src/helpers/api.helper';
import { CourseService } from 'src/services/course.service';
import { ByIdBodyInterface, CourseCreateBodyInterface } from './course.interface';

export const createCourse = createAsyncThunk<'Success', CourseCreateBodyInterface>(
	'course/create',
	async (body, thunkApi) => {
		try {
			const response = await CourseService.createCourse(body);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const editCourse = createAsyncThunk<'Success', CourseCreateBodyInterface>(
	'course/edit',
	async (body, thunkApi) => {
		try {
			const response = await CourseService.editCourse(body, body._id);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const deleteCourse = createAsyncThunk<'Success', ByIdBodyInterface>(
	'course/delete',
	async (body, thunkApi) => {
		try {
			const response = await CourseService.deleteCourse(body.courseId);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const activateCourse = createAsyncThunk<'Success', ByIdBodyInterface>(
	'course/activate',
	async (body, thunkApi) => {
		try {
			const response = await CourseService.activateCourse(body.courseId);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const draftCourse = createAsyncThunk<'Success', ByIdBodyInterface>(
	'course/draft',
	async (body, thunkApi) => {
		try {
			const response = await CourseService.draftCourse(body.courseId);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);
