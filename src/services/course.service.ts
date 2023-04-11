import $axios from 'src/api/axios';
import { getCourseUrl } from 'src/config/api.config';
import { CourseType } from 'src/interfaces/course.interface';

export const CourseService = {
	async createCourse(body: CourseType) {
		const response = await $axios.post(`${getCourseUrl('create')}`, body);

		return response.data;
	},

	async editCourse(body: CourseType, id: string) {
		const response = await $axios.patch(`${getCourseUrl('edit')}/${id}`, body);

		return response.data;
	},

	async deleteCourse(id: string) {
		const response = await $axios.delete(`${getCourseUrl('delete')}/${id}`);

		return response.data;
	},
};
