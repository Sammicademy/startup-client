import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CourseType } from 'src/interfaces/course.interface';
import { InstructorType } from 'src/interfaces/instructor.interface';
import { UserType } from 'src/interfaces/user.interface';
import { AdminIntialStateType } from './admin.interface';

const initialState: AdminIntialStateType = {
	isLoading: false,
	error: null,
	courses: [],
	instructors: [],
	users: [],
};

export const adminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		startLoading: state => {
			state.isLoading = true;
		},
		clearCourseError: state => {
			state.error = null;
		},
		getCourses: (state, action: PayloadAction<CourseType[]>) => {
			state.courses = action.payload;
		},
		getInstructors: (state, action: PayloadAction<InstructorType[]>) => {
			state.instructors = action.payload;
		},
		getUsers: (state, action: PayloadAction<UserType[]>) => {
			state.users = action.payload;
		},
	},
});

export const adminReducer = adminSlice.reducer;
export const adminSliceAction = adminSlice.actions;
