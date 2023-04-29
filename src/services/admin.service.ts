import axios from 'axios';
import { API_URL, getCourseUrl } from 'src/config/api.config';
import { CourseType } from 'src/interfaces/course.interface';

export const AdminService = {
	async getAllCourses() {
		const { data } = await axios.get<CourseType[]>(
			`${API_URL}${getCourseUrl('admin-all-courses')}`
		);

		return data;
	},
};
