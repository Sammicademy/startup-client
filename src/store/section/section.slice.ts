import { createSlice } from '@reduxjs/toolkit';
import { createLesson, deleteLesson, editLesson } from '../lesson/lesson.action';
import {
	createSection,
	deleteSection,
	dragSection,
	editSection,
	getSection,
} from './section.action';
import { SectionInitialStateType } from './section.interface';

const initialState: SectionInitialStateType = {
	isLoading: false,
	pendingSection: false,
	error: null,
	sections: [],
};

export const sectionSlice = createSlice({
	name: 'section',
	initialState,
	reducers: {
		clearSectionError: state => {
			state.error = null;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(createSection.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(createSection.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.sections = payload;
			})
			.addCase(createSection.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(deleteSection.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(deleteSection.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.sections = payload;
			})
			.addCase(deleteSection.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(editSection.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(editSection.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;

				const newSections = state.sections.map(item => {
					if (item._id == payload._id) {
						return payload;
					}
					return item;
				});

				state.sections = newSections;
			})
			.addCase(editSection.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(getSection.pending, state => {
				state.pendingSection = true;
				state.error = null;
			})
			.addCase(getSection.fulfilled, (state, { payload }) => {
				state.pendingSection = false;
				state.error = null;
				state.sections = payload;
			})
			.addCase(getSection.rejected, (state, { payload }) => {
				state.pendingSection = false;
				state.error = payload;
			})
			.addCase(dragSection.pending, state => {
				state.error = null;
				state.isLoading = true;
			})
			.addCase(dragSection.fulfilled, (state, { payload }) => {
				state.error = null;
				state.isLoading = false;
				state.sections = payload;
			})
			.addCase(dragSection.rejected, (state, { payload }) => {
				state.error = payload;
				state.isLoading = false;
			})
			.addCase(createLesson.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(createLesson.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				const newArr = state.sections.map(item => {
					if (item._id == payload._id) {
						return payload;
					}

					return item;
				});
				state.sections = newArr;
			})
			.addCase(createLesson.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(editLesson.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(editLesson.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				const newArr = state.sections.map(item => {
					const lessons = item.lessons.map(l => {
						if (l._id == payload._id) {
							return payload;
						}

						return l;
					});
					item.lessons = lessons;
					return item;
				});

				state.sections = newArr;
			})
			.addCase(editLesson.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(deleteLesson.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(deleteLesson.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				const newArr = state.sections.map(item => {
					if (item._id == payload._id) {
						return payload;
					}

					return item;
				});
				state.sections = newArr;
			})
			.addCase(deleteLesson.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});

export const sectionReducer = sectionSlice.reducer;
export const sectionSliceAction = sectionSlice.actions;
