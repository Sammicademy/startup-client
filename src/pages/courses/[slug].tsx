import { useRouter } from 'next/router';
import { withLayout } from 'src/layouts/layout';
import Seo from 'src/layouts/seo/seo';
import { DetailedCourseComponent } from 'src/page-component';

const DetailedCoursePage = () => {
	const router = useRouter();

	return (
		<Seo metaTitle={`Sammi course | ${router.query.slug}`}>
			<DetailedCourseComponent />
		</Seo>
	);
};

export default withLayout(DetailedCoursePage);
