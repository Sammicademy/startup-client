import { Center, Icon, Text } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import { testimonialsCarousel } from 'src/config/carousel';
import SectionTitle from '../section-title/section-title';
import { ImQuotesRight } from 'react-icons/im';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
	const { t } = useTranslation();

	return (
		<>
			<SectionTitle
				textAlign={'center'}
				title={t('testimonials_title', { ns: 'home' })}
				subtitle={t('testimonials_description', { ns: 'home' })}
			/>

			<Carousel responsive={testimonialsCarousel} arrows={true} showDots={false} infinite>
				{data.map((item, idx) => (
					<Center key={idx} flexDirection={'column'} maxW={'container.sm'} mx={'auto'}>
						<Icon as={ImQuotesRight} fontSize={100} />
						<Text mt={5} textAlign={'center'}>
							{item.description}
						</Text>
						<Text fontSize={'xl'} fontWeight={'bolf'} mt={3}>
							{item.name}
						</Text>
					</Center>
				))}
			</Carousel>
		</>
	);
};

export default Testimonials;

const data = [
	{
		name: 'Samar Badriddinov',
		description:
			'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
	},
	{
		name: 'Yusuf Khamdamov',
		description:
			'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
	},
	{
		name: 'Abdulloh Oripov',
		description:
			'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
	},
	{
		name: 'Shoxrux Yusupov',
		description:
			'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
	},
];
