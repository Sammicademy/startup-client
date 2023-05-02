import * as Yup from 'yup';

export const BooksValidation = {
	createBooks() {
		return Yup.object({
			title: Yup.string().required('title_is_required'),
			price: Yup.number().required('price_is_required'),
			pdf: Yup.string().required('pdf_is_requried'),
			category: Yup.string().required('category_is_required'),
		});
	},
};
