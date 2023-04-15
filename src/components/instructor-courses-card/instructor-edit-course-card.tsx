import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	Icon,
	Stack,
	Text,
	useToast,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { CiViewList } from 'react-icons/ci';
import { FiEdit2 } from 'react-icons/fi';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { SiGoogleanalytics } from 'react-icons/si';
import { VscOpenPreview } from 'react-icons/vsc';
import { loadImage } from 'src/helpers/image.helper';
import { useActions } from 'src/hooks/useActions';
import { InstructoCoursesCardProps } from './instructor-courses-card.props';

const InstructorEditCourseCard: FC<InstructoCoursesCardProps> = ({ item }): JSX.Element => {
	const router = useRouter();
	const { deleteCourse } = useActions();
	const toast = useToast();
	const { t } = useTranslation();

	const onDelete = () => {
		const isAgree = confirm('Are you sure?');

		if (isAgree) {
			deleteCourse({
				courseId: item._id,
				callback: () => {
					toast({
						title: t('successfully_deleted', { ns: 'instructor' }),
						description: item.title,
						position: 'top-right',
						isClosable: true,
					});
					router.replace(router.asPath);
				},
			});
		}
	};

	return (
		<HStack key={item.title} p={5} boxShadow={'dark-lg'} mt={5} borderRadius={'lg'}>
			<Stack spacing={5}>
				<Box pos={'relative'} w={'100%'} h={'300px'}>
					<Image
						fill
						src={loadImage(item.previewImage)}
						style={{ objectFit: 'cover', borderRadius: '10px' }}
						alt={item.title}
					/>
				</Box>
				<Text fontSize={'20px'} color={'facebook.500'} fontWeight={'bold'}>
					{item.level}
				</Text>
				<Heading>{item.title}</Heading>
				<HStack>
					<Flex align={'center'} gap={1}>
						<Icon as={CiViewList} />
						<Text>
							{item.lessonCount} {t('lessons', { ns: 'courses' })}
						</Text>
					</Flex>
					<Flex align={'center'} gap={1}>
						<Icon as={AiOutlineClockCircle} />
						<Text>
							{item.totalHour} {t('hour', { ns: 'courses' })}
						</Text>
					</Flex>
					<Flex align={'center'} gap={1}>
						<Icon as={SiGoogleanalytics} />
						<Text>{item.level}</Text>
					</Flex>
				</HStack>
				<Divider />
				<Flex flexWrap={'wrap'} gap={5}>
					<Button rightIcon={<VscOpenPreview />}>{t('preview', { ns: 'instructor' })}</Button>
					<Button
						rightIcon={<FiEdit2 />}
						onClick={() => router.push(`/instructor/edit-courses/${item.slug}`)}
					>
						{t('edit_course', { ns: 'instructor' })}
					</Button>
					<Button rightIcon={<BsTrash />} onClick={onDelete}>
						{t('delete_course', { ns: 'instructor' })}
					</Button>
					<Button
						rightIcon={<HiOutlineStatusOnline />}
						onClick={() => router.push(`/instructor/curriculum/${item.slug}`)}
					>
						{t('curriculum_course', { ns: 'instructor' })}
					</Button>
				</Flex>
			</Stack>
		</HStack>
	);
};

export default InstructorEditCourseCard;
