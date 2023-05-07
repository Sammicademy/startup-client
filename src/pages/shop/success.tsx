import { GetServerSideProps } from 'next';
import { withLayout } from 'src/layouts/layout';
import { SuccessPageComponent } from 'src/page-component';

const SuccessPage = () => {
	return <SuccessPageComponent />;
};

export default withLayout(SuccessPage);

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	// if (!query.payment_intent && !query.payment_intent_client_secret && !query.redirect_status) {
	// 	return {
	// 		redirect: {
	// 			destination: '/',
	// 			permanent: false,
	// 		},
	// 	};
	// }

	return {
		props: {},
	};
};
