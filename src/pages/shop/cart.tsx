import { withLayout } from 'src/layouts/layout';
import CartPageComponent from 'src/page-component/shop-page-component/cart-page-component';

const CartPage = () => {
	return <CartPageComponent />;
};

export default withLayout(CartPage);
