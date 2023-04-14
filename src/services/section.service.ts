import $axios from 'src/api/axios';
import { getCourseUrl, getSectionUrl } from 'src/config/api.config';
import { SectionBodyType } from 'src/store/section/section.interface';

export const SectionService = {
	async createSection(body: SectionBodyType) {
		const response = await $axios.post(`${getSectionUrl('create')}/${body.courseId}`, {
			title: body.title,
		});

		return response.data;
	},

	async deleteSection(body: SectionBodyType) {
		const response = await $axios.delete(
			`${getSectionUrl('delete')}/${body.sectionId}/${body.courseId}`
		);

		return response.data;
	},

	async editSection(body: SectionBodyType) {
		const response = await $axios.put(`${getSectionUrl('edit')}/${body.sectionId}`, {
			title: body.title,
			lessons: body.lessons,
		});

		return response.data;
	},

	async getSection(body: SectionBodyType) {
		const response = await $axios.get(`${getSectionUrl('get')}/${body.courseId}`);

		return response.data;
	},

	async dragSection(body: SectionBodyType) {
		const response = await $axios.put(`${getCourseUrl('drag')}/${body.courseId}`, {
			sections: body.sections,
		});

		return response.data;
	},
};
