import { withLayout } from 'src/layouts/layout';
import CheckoutPageComponent from 'src/page-component/shop-page-component/checkout-page-component';

const CheckoutPage = () => {
	return <CheckoutPageComponent />;
};

export default withLayout(CheckoutPage);
