import axios from 'axios';
import $axios from 'src/api/axios';
import { API_URL, getInstructorurl } from 'src/config/api.config';
import { CourseType } from 'src/interfaces/course.interface';
import { InstructorApplyBody } from 'src/store/instructor/instructor.interface';

export const InstructorService = {
	async applyInstructor(body: InstructorApplyBody) {
		const response = await axios.post<'Success'>(`${API_URL}${getInstructorurl('apply')}`, body);

		return response.data;
	},

	async getAllCourses(token?: string) {
		const response = await axios.get<CourseType[]>(`${API_URL}${getInstructorurl('course-all')}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	},

	async getDetailedCourse(token?: string, slug?: string) {
		const response = await $axios.get(`${getInstructorurl(`course/${slug}`)}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	},
};
