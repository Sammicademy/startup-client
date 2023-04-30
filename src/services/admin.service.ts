import axios from 'axios';
import { API_URL, getAdminUrl, getCourseUrl } from 'src/config/api.config';
import { CourseType } from 'src/interfaces/course.interface';
import { InstructorType } from 'src/interfaces/instructor.interface';

export const AdminService = {
	async getAllCourses() {
		const { data } = await axios.get<CourseType[]>(
			`${API_URL}${getCourseUrl('admin-all-courses')}`
		);

		return data;
	},
	async getAllInstructors(token?: string) {
		const { data } = await axios.get<InstructorType[]>(
			`${API_URL}${getAdminUrl('all-instructors')}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		return data;
	},
};
