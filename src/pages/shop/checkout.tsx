import axios from 'axios';
import { GetServerSideProps } from 'next';
import { API_URL } from 'src/config/api.config';
import { withLayout } from 'src/layouts/layout';
import { CheckoutPageComponent } from 'src/page-component';

const CheckoutPage = ({ cards }) => {
	console.log(cards);

	return <CheckoutPageComponent cards={cards} />;
};

export default withLayout(CheckoutPage);

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { data } = await axios.get(`${API_URL}/customer/saved-cards`, {
		headers: {
			Authorization: `Bearer ${req.cookies.refresh}`,
		},
	});

	return {
		props: {
			cards: data,
		},
	};
};
