import axios from 'axios';
import $axios from 'src/api/axios';
import { API_URL, getPaymentUrl } from 'src/config/api.config';

export const PaymentService = {
	async paymentBooks(price: number) {
		try {
			const { data } = await $axios.post(`${getPaymentUrl('books')}`, { price });

			return data;
		} catch (error) {
			console.log(error);
		}
	},

	async productList() {
		try {
			const { data } = await axios.get(`${API_URL}${getPaymentUrl('list-products')}`);

			return data;
		} catch (error) {
			console.log(error);
		}
	},

	async getInstructorBalancce(token?: string) {
		const response = await axios.get(`${API_URL}${getPaymentUrl('instructor-balance')}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	},

	async instructorAccountLink() {
		try {
			const response = await $axios.post(`${getPaymentUrl('instructor-connect-login')}`);

			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
};
