import { NextPage } from 'next';
import { withLayout } from 'src/layouts/layout';
import Seo from 'src/layouts/seo/seo';
import { BecomeInstructorPageComponent } from 'src/page-component';

const BecomeInstructor: NextPage = () => {
	return (
		<Seo metaTitle='Become an instructor'>
			<BecomeInstructorPageComponent />
		</Seo>
	);
};

export default withLayout(BecomeInstructor);
