import { withLayout } from 'src/layouts/layout';
import { CoursesPageComponent } from 'src/page-component';

const Courses = () => {
	return <CoursesPageComponent />;
};

export default withLayout(Courses);
