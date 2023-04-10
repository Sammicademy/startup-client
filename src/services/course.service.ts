import $axios from 'src/api/axios';
import { SubmitValuesInterface } from 'src/components/instructor-manage-course/instructor-manage-course.props';
import { getCourseUrl } from 'src/config/api.config';

export const CourseService = {
	async createCourse(body: SubmitValuesInterface) {
		const response = await $axios.post(`${getCourseUrl('create')}`, body);

		return response.data;
	},
};
