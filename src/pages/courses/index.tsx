import { useTranslation } from 'react-i18next';
import { withLayout } from 'src/layouts/layout';
import Seo from 'src/layouts/seo/seo';
import { CoursesPageComponent } from 'src/page-component';

const Courses = () => {
	const { t } = useTranslation();

	return (
		<Seo
			metaTitle={
				`Sammi | ${t('course_page_title', { ns: 'seo' })}` ||
				'Sammi | All Courses'
			}
			metaDescription={
				`Sammi | ${t('course_page_description', { ns: 'seo' })}` ||
				'All courses in sammi platform just learn and relax'
			}
		>
			<CoursesPageComponent />
		</Seo>
	);
};

export default withLayout(Courses);
