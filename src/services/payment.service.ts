import $axios from 'src/api/axios';
import { getPaymentUrl } from 'src/config/api.config';

export const PaymentService = {
	async paymentBooks(price: number) {
		try {
			const { data } = await $axios.post(`${getPaymentUrl('books')}`, { price });

			return data;
		} catch (error) {
			console.log(error);
		}
	},
};
