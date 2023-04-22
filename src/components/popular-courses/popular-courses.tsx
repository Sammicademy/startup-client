import { useTranslation } from 'react-i18next';
import Carousel from 'react-multi-carousel';
import { courseCarousel } from 'src/config/carousel';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import PopularCoursesCard from '../popular-courses-card/popular-courses-card';
import SectionTitle from '../section-title/section-title';

const PopularCourses = () => {
	const { t } = useTranslation();
	const { courses } = useTypedSelector(state => state.course);

	return (
		<>
			<SectionTitle
				title={t('popular_courses_title', { ns: 'home' })}
				subtitle={t('popular_courses_description', { ns: 'home' })}
			/>
			<Carousel
				responsive={courseCarousel}
				arrows={true}
				showDots={false}
				autoPlay={true}
				autoPlaySpeed={5000}
				infinite
			>
				{courses.map(item => (
					<PopularCoursesCard item={item} key={item.title} />
				))}
			</Carousel>
		</>
	);
};

export default PopularCourses;
