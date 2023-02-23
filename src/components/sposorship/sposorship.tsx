import { Icon } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import { sponsorshipCarousel } from 'src/config/carousel';
import { trustedCompeny } from 'src/config/constants';
import SectionTitle from '../section-title/section-title';

const Sposorship = () => {
	return (
		<>
			<SectionTitle title='' subtitle='Trusted by the world’s best' textAlign={'center'} mb={5} />
			<Carousel responsive={sponsorshipCarousel} arrows={false} showDots={false} infinite autoPlay={true} autoPlaySpeed={1000}>
				{trustedCompeny.map((item, idx) => (
					<Icon key={idx} as={item} fontSize={50} />
				))}
			</Carousel>
		</>
	);
};

export default Sposorship;
