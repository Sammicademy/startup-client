import { createSlice } from '@reduxjs/toolkit';
import { createLesson, deleteLesson, editLesson } from './lesson.action';
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
	extraReducers: builder => {
		builder
			.addCase(createLesson.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(createLesson.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(createLesson.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(deleteLesson.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(deleteLesson.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(deleteLesson.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(editLesson.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(editLesson.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(editLesson.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});

export const lessonReducer = lessonSlice.reducer;
export const lessonSliceAction = lessonSlice.actions;
