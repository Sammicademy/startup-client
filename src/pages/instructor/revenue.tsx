import { NextPage } from 'next';
import { withInstructorLayout } from 'src/layouts/instructor';
import { RevenuePageComponent } from 'src/page-component';

const Revenue: NextPage = () => {
	return <RevenuePageComponent />;
};

export default withInstructorLayout(Revenue);
