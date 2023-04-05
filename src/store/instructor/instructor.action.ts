import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorCatch } from 'src/helpers/api.helper';
import { InstructorService } from 'src/services/instructor.service';
import { InstructorApplyBody } from './instructor.interface';

export const applyInstructor = createAsyncThunk<'Success', InstructorApplyBody>(
	'instructor/apply',
	async (body, thunkApi) => {
		try {
			const response = await InstructorService.applyInstructor(body);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);
