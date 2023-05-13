import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';
import { ProductsType } from 'src/interfaces/constants.interface';
import { withLayout } from 'src/layouts/layout';
import Seo from 'src/layouts/seo/seo';
import { PricingPageComponent } from 'src/page-component';
import { PaymentService } from 'src/services/payment.service';

const PricingPage = ({ products }) => {
	const { t } = useTranslation();

	console.log(products);

	return (
		<Seo
			metaTitle={`Sammi | ${t('pricing_page_title', { ns: 'seo' })}` || 'Sammi | Pricing Package'}
			metaDescription={
				`Sammi | ${t('pricing_page_description', { ns: 'seo' })}` ||
				'The best package for using and doing lesson on sammi academy'
			}
		>
			<PricingPageComponent products={products} />
		</Seo>
	);
};

export default withLayout(PricingPage);

export const getServerSideProps: GetServerSideProps<PricingPageType> = async () => {
	const products = await PaymentService.productList();

	return {
		props: { products },
	};
};

interface PricingPageType extends Record<string, unknown> {
	products: ProductsType[];
}
