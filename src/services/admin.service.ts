import axios from 'axios';
import $axios from 'src/api/axios';
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
	async approveInstructor(instructorId: string) {
		const { data } = await $axios.put<'Success'>(`${getAdminUrl('approve-instructor')}`, {
			instructorId,
		});

		return data;
	},

	async deleteInstructor(instructorId: string) {
		const { data } = await $axios.put<'Success'>(`${getAdminUrl('delete-instructor')}`, {
			instructorId,
		});

		return data;
	},
};
