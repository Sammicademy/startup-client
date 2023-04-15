import { createSlice } from '@reduxjs/toolkit';
import { LessonInitialStateType } from './lesson.interface';

const initialState: LessonInitialStateType = {
	isLoading: false,
	error: null,
};

export const lessonSlice = createSlice({
	name: 'lesson',
	initialState,
	reducers: {
		clearlessonError: state => {
			state.error = null;
		},
	},
});

export const lessonReducer = lessonSlice.reducer;
export const lessonSliceAction = lessonSlice.actions;
