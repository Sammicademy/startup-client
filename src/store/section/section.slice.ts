import { createSlice } from '@reduxjs/toolkit';
import { createSection, deleteSection, editSection, getSection } from './section.action';
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
			.addCase(createSection.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(createSection.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(deleteSection.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(deleteSection.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(deleteSection.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(editSection.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(editSection.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
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
			});
	},
});

export const sectionReducer = sectionSlice.reducer;
export const sectionSliceAction = sectionSlice.actions;
