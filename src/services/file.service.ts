import axios from 'axios';
import { API_URL, getFileUrl } from 'src/config/api.config';

export const FileService = {
	async fileUpload(formData: FormData, folder: string = 'default') {
		const response = await axios.post<{ url: string }>(
			`${API_URL}${getFileUrl('save')}?folder=${folder}`,
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		);

		return response.data;
	},
};
