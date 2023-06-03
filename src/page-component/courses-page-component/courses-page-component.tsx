import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Flex,
	Input,
	Radio,
	RadioGroup,
	Spinner,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactStars from 'react-stars';
import { AllCoursesCard } from 'src/components';
import SectionTitle from 'src/components/section-title/section-title';
import { coursesFilter } from 'src/config/constants';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { CourseType } from 'src/interfaces/course.interface';
import { AppService } from 'src/services/app.service';
import {
	FilterCourseType,
	FilterItemProps,
} from './courses-page-component.props';

const CoursesPageComponent = () => {
	const [filter, setFilter] = useState<FilterCourseType>({
		id: '',
		category: '',
	});
	const [allCourses, setAllCourses] = useState<CourseType[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const { t } = useTranslation();
	const { courses } = useTypedSelector(state => state.course);

	useEffect(() => {
		const getCoursesByLng = async (lng: string) => {
			setIsLoading(true);
			return await AppService.getCourses(lng);
		};

		if (filter.id == 'category') {
			setAllCourses(
				courses.filter(c => c.category == filter.category)
			);
		} else if (filter.id == 'rating') {
			setAllCourses(
				courses.filter(c => c.reviewAvg >= Number(filter.category))
			);
		} else if (filter.id == 'level') {
			setAllCourses(courses.filter(c => c.level == filter.category));
		} else if (filter.id == 'language') {
			getCoursesByLng(filter.category).then(res => {
				setIsLoading(false);
				setAllCourses(res);
			});
		}
	}, [filter]);

	useEffect(() => {
		setAllCourses(courses);
	}, [courses]);

	return (
		<>
			<SectionTitle
				title={t('title', { ns: 'courses' })}
				subtitle={t('description', { ns: 'courses' })}
			/>
			<Box pos={'relative'} mt={5}>
				<Input
					h={14}
					w={'full'}
					bg={'white'}
					color={'gray.900'}
					placeholder={
						t('search_input_placeholder', { ns: 'courses' }) || ''
					}
					_placeholder={{ color: 'gray.500' }}
				/>
				<Button
					pos={'absolute'}
					right={2}
					top={2}
					colorScheme={'facebook'}
					zIndex={999}
				>
					{t('search_input_btn', { ns: 'courses' })}
				</Button>
			</Box>
			<Flex mt={5} gap={5} direction={{ base: 'column', lg: 'row' }}>
				<Box
					w={{ base: '100%', lg: '30%' }}
					height={'fit-content'}
					p={5}
					border={'1px'}
					borderRadius={'lg'}
					borderColor={useColorModeValue('gray.200', 'gray.700')}
				>
					{coursesFilter.map((item, idx) => (
						<FilterItem
							item={item}
							idx={idx}
							key={item.id}
							setFilter={setFilter}
						/>
					))}
				</Box>
				<Box w={{ base: '100%', lg: '70%' }}>
					{isLoading ? (
						<Flex h={'60vh'} justify={'center'} align={'center'}>
							<Spinner />
						</Flex>
					) : (
						<>
							{allCourses.map(item => (
								<AllCoursesCard key={item.title} course={item} />
							))}
						</>
					)}
				</Box>
			</Flex>
		</>
	);
};
export default CoursesPageComponent;

const FilterItem = ({
	item,
	idx,
	setFilter,
}: {
	item: FilterItemProps;
	idx: number;
	setFilter: Dispatch<SetStateAction<FilterCourseType>>;
}) => {
	const { t } = useTranslation();

	const renderFilterItem = () => (
		<>
			{item.categoryList.map(c => (
				<Radio
					key={c.id}
					onChange={() => setFilter({ category: c.id, id: item.id })}
					value={c.id}
					colorScheme={'facebook'}
				>
					<Flex gap={2}>
						{item.id === 'rating' && (
							<ReactStars
								value={Number(c.id)}
								edit={false}
								color2={'#e59819'}
							/>
						)}
						{t(c.name, { ns: 'courses' })}
					</Flex>
				</Radio>
			))}
		</>
	);

	return (
		<Accordion
			key={item.id}
			allowToggle
			defaultIndex={idx === 0 ? 0 : idx}
		>
			<AccordionItem borderTop={'none'}>
				<AccordionButton>
					<Text fontSize={'xl'} flex='1' textAlign='left'>
						{t(item.title, { ns: 'courses' })}
					</Text>
					<AccordionIcon />
				</AccordionButton>
				<AccordionPanel pb={4}>
					<RadioGroup>
						<Stack>{renderFilterItem()}</Stack>
					</RadioGroup>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};
