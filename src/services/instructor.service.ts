import axios from 'axios';
import { API_URL, getInstructorurl } from 'src/config/api.config';
import { InstructorApplyBody } from 'src/store/instructor/instructor.interface';

export const InstructorService = {
	async applyInstructor(body: InstructorApplyBody) {
		const response = await axios.post<'Success'>(`${API_URL}${getInstructorurl('apply')}`, body);

		return response.data;
	},
};
