import axios from 'axios';
import { API_URL, getCourseUrl, getInstructorurl } from 'src/config/api.config';

export const AppService = {
	async getMainPageSource(language?: string) {
		const { data: courses } = await axios.get(
			`${API_URL}${getCourseUrl('all')}?language=${language}&limit=6`
		);

		const { data: instructors } = await axios.get(
			`${API_URL}${getInstructorurl('all')}?language=${language}&limit=6`
		);

		return { courses, instructors };
	},

	async getCourses(language?: string, limit: string = '10') {
		const { data: courses } = await axios.get(
			`${API_URL}${getCourseUrl('all')}?language=${language}&limit=${limit}`
		);

		return courses;
	},
};
