import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CourseType } from 'src/interfaces/course.interface';
import { InstructorType } from 'src/interfaces/instructor.interface';
import { applyInstructor } from './instructor.action';
import { InstructorIntialStateType } from './instructor.interface';

const initialState: InstructorIntialStateType = {
	isLoading: false,
	error: null,
	courses: [],
	course: null,
	instructors: [],
};

export const instructorSlice = createSlice({
	name: 'instructor',
	initialState,
	reducers: {
		clearInstructorError: state => {
			state.error = null;
		},
		instructorAllCourses: (state, action: PayloadAction<CourseType[]>) => {
			state.courses = action.payload;
		},
		instructorDetailedCourse: (state, action: PayloadAction<CourseType>) => {
			state.course = action.payload;
		},
		getInstructors: (state, action: PayloadAction<InstructorType[]>) => {
			state.instructors = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(applyInstructor.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(applyInstructor.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(applyInstructor.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});

export const instructorReducer = instructorSlice.reducer;
export const instructorSliceAction = instructorSlice.actions;
