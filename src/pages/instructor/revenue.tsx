import { GetServerSideProps, NextPage } from 'next';
import { BalanceType } from 'src/interfaces/instructor.interface';
import { withInstructorLayout } from 'src/layouts/instructor';
import { RevenuePageComponent } from 'src/page-component';
import { PaymentService } from 'src/services/payment.service';

const Revenue: NextPage<RevenuePageType> = ({ balance }) => {
	return <RevenuePageComponent balance={balance} />;
};

export default withInstructorLayout(Revenue);

export const getServerSideProps: GetServerSideProps<RevenuePageType> = async ({ req }) => {
	const balance = await PaymentService.getInstructorBalancce(req.cookies.refresh);

	return {
		props: {
			balance,
		},
	};
};

interface RevenuePageType {
	balance: BalanceType;
}
