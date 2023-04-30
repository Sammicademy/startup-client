import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorCatch } from 'src/helpers/api.helper';
import { AdminService } from 'src/services/admin.service';
import { ApproveAndDeleteBodyResponse } from './admin.interface';

export const approveInstructor = createAsyncThunk<'Success', ApproveAndDeleteBodyResponse>(
	'admin/approve-instructor',
	async (body, thunkApi) => {
		try {
			const response = await AdminService.approveInstructor(body.instructorId);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const deleteInstructor = createAsyncThunk<'Success', ApproveAndDeleteBodyResponse>(
	'admin/deelete-instructor',
	async (body, thunkApi) => {
		try {
			const response = await AdminService.deleteInstructor(body.instructorId);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);
