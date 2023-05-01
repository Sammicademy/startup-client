import * as Yup from 'yup';

export const BooksValidation = {
	createBooks() {
		return Yup.object({
			title: Yup.string().required('Title is required'),
			price: Yup.number().required('Price is required'),
			pdf: Yup.string().required('PDF is required'),
		});
	},
};
