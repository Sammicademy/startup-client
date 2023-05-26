import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LessonType } from 'src/interfaces/instructor.interface';
import { LessonInitialStateType } from './lesson.interface';

const initialState: LessonInitialStateType = {
	isLoading: false,
	error: null,
	lesson: {} as LessonType,
};

export const lessonSlice = createSlice({
	name: 'lesson',
	initialState,
	reducers: {
		clearlessonError: state => {
			state.error = null;
		},
		getLesson: (state, action: PayloadAction<LessonType>) => {
			state.lesson = action.payload;
		},
	},
});

export const lessonReducer = lessonSlice.reducer;
export const lessonSliceAction = lessonSlice.actions;
