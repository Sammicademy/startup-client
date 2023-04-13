import $axios from 'src/api/axios';
import { getLessonUrl } from 'src/config/api.config';
import { LessonBodyType } from 'src/store/lesson/lesson.interface';

export const LessonService = {
	async createLesson(body: LessonBodyType) {
		const response = await $axios.post(`${getLessonUrl('create')}/${body.sectionId}`, body);

		return response.data;
	},

	async deleteLesson(body: LessonBodyType) {
		const response = await $axios.delete(
			`${getLessonUrl('delete')}/${body.lessonId}/${body.sectionId}`
		);

		return response.data;
	},

	async editLesson(body: LessonBodyType) {
		const response = await $axios.put(`${getLessonUrl('edit')}/${body.lessonId}`, body);

		return response.data;
	},

	async getLesson(body: LessonBodyType) {
		const response = await $axios.get(`${getLessonUrl('get')}/${body.courseId}`);

		return response.data;
	},
};
