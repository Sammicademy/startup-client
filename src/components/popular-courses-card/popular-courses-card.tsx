import {
	Avatar,
	Box,
	Divider,
	Flex,
	Heading,
	HStack,
	Icon,
	Stack,
	Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { CiViewList } from 'react-icons/ci';
import { SiGoogleanalytics } from 'react-icons/si';
import ReactStars from 'react-stars';
import { loadImage } from 'src/helpers/image.helper';
import { PopularCoursesCardProps } from './popular-courses-card.props';

const PopularCoursesCard = ({ item }: PopularCoursesCardProps) => {
	return (
		<Stack key={item.title} spacing={3} p={3} cursor={'pointer'}>
			<Box pos={'relative'} w={'full'} h={'210px'}>
				<Image
					src={loadImage(item.previewImage)}
					alt={item.title}
					fill
					style={{ objectFit: 'cover', borderRadius: '10px' }}
				/>
			</Box>
			<HStack>
				<Text color={'#e59819'}>{item.reviewAvg || 0}</Text>
				<ReactStars
					edit={false}
					value={item.reviewAvg || 5}
					color2={'#e59819'}
				/>
				<Text opacity={'.8'}>({item.reviewCount})</Text>
			</HStack>
			<Heading fontSize={'xl'}>{item.title}</Heading>
			<HStack>
				<Flex align={'center'} gap={1}>
					<Icon as={CiViewList} />
					<Text>{item.lessonCount} Lesson</Text>
				</Flex>
				<Flex align={'center'} gap={1}>
					<Icon as={AiOutlineClockCircle} />
					<Text>{item.totalHour} Hour</Text>
				</Flex>
				<Flex align={'center'} gap={1}>
					<Icon as={SiGoogleanalytics} />
					<Text>{item.level}</Text>
				</Flex>
			</HStack>
			<Divider />
			<Flex justify={'space-between'} align={'center'}>
				<HStack align={'center'}>
					<Avatar
						src={item.author.avatar}
						name={item.author.fullName}
					/>
					<Text>{item.author.fullName}</Text>
				</HStack>
				<Text>
					{item.price.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</Text>
			</Flex>
		</Stack>
	);
};

export default PopularCoursesCard;
