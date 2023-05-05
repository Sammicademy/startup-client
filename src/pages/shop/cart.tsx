import { NextPage } from 'next';
import { withLayout } from 'src/layouts/layout';
import { CartPageComponent } from 'src/page-component';

const CartPage: NextPage = () => {
	return <CartPageComponent />;
};

export default withLayout(CartPage);
