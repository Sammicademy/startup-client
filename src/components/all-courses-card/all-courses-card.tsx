import {
	Avatar,
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	Icon,
	Image,
	Stack,
	Text,
	useToast
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsMinecartLoaded } from 'react-icons/bs';
import { CiViewList } from 'react-icons/ci';
import { SiGoogleanalytics } from 'react-icons/si';
import ReactStars from 'react-stars';
import { loadImage } from 'src/helpers/image.helper';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { AllCoursesCardProps } from './all-courses-card.props';

const AllCoursesCard = ({ course }: AllCoursesCardProps) => {
	const router = useRouter();
	const { addCourseToCart } = useActions();
	const { courses } = useTypedSelector(state => state.cart);
	const toast = useToast();

	const onDetailedCourse = () => router.push(`/courses/${course.slug}`);

	const addCourseToCardHandler = () => {
		const existingProduct = courses.find(c => c._id === course._id);

		if (existingProduct) {
			toast({ title: 'Course already exist in cart', position: 'bottom', status: 'warning' });
			return;
		}
		addCourseToCart(course);
		toast({ title: 'Course added successfully', position: 'bottom' });
	};

	return (
		<>
			<Box py={4}>
				<Flex gap={4} direction={{ base: 'column', md: 'row' }}>
					<Image
						src={loadImage(course.previewImage)}
						alt={course.title}
						w={{ base: 'full', md: '250px' }}
						h={'250px'}
						borderRadius={'lg'}
						objectFit={'cover'}
						onClick={onDetailedCourse}
						cursor={'pointer'}
					/>
					<Stack>
						<HStack>
							<Text color={'#e59819'}>5</Text>
							<ReactStars edit={false} value={5} color2={'#e59819'} />
							<Text opacity={'.8'}>(5)</Text>
						</HStack>
						<Heading fontSize={'xl'}>{course.title}</Heading>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nostrum
							laboriosam est ut.
						</Text>
						<Flex gap={2} fontSize={'14px'} direction={{ base: 'column', sm: 'row' }}>
							<Avatar src={course.author.avatar} name={course.author.fullName} />
							<HStack>
								<Flex align={'center'} gap={1}>
									<Icon as={CiViewList} />
									<Text>{course.lessonCount} lesson</Text>
								</Flex>
								<Flex align={'center'} gap={1}>
									<Icon as={AiOutlineClockCircle} />
									<Text>{course.totalHour} hours</Text>
								</Flex>
								<Flex align={'center'} gap={1}>
									<Icon as={SiGoogleanalytics} />
									<Text>{course.level}</Text>
								</Flex>
							</HStack>
						</Flex>
						<Divider />
						<Flex
							align={{ base: 'flex-start', md: 'center' }}
							justify={'space-between'}
							direction={{ base: 'column', md: 'row' }}
						>
							<Text fontSize={'xl'} fontWeight={'bold'}>
								{course.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
							</Text>
							<Flex gap={4} mt={{ base: 5, md: 0 }}>
								<Button
									rightIcon={<BsMinecartLoaded />}
									colorScheme={'facebook'}
									onClick={addCourseToCardHandler}
									isDisabled={courses.map(c => c._id).includes(course._id) ? true : false}
								>
									Add to cart
								</Button>
								<Button onClick={onDetailedCourse} colorScheme={'facebook'} variant={'outline'}>
									Detail
								</Button>
							</Flex>
						</Flex>
					</Stack>
				</Flex>
			</Box>
			<Divider />
		</>
	);
};

export default AllCoursesCard;
