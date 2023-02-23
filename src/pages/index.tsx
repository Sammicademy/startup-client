import { withLayout } from 'src/layouts/layout';
import { HomePageComponent } from 'src/page-component';

const Home = () => {
	return <HomePageComponent />;
};

export default withLayout(Home);
