import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Center,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Spinner,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import $axios from 'src/api/axios';
import { getLessonUrl } from 'src/config/api.config';
import { getLessonTime } from 'src/helpers/time.helper';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { LessonType } from 'src/interfaces/instructor.interface';
import { CourseDashboardProps } from './courses-page-component.props';

const Sidebar: FC<CourseDashboardProps> = ({ ...props }) => {
	const [moduleIndex, setModuleIndex] = useState<number>(0);
	const [isComplete, setIsComplete] = useState<boolean>(false);

	const { sections, pendingSection } = useTypedSelector(
		state => state.section
	);
	const { course } = useTypedSelector(state => state.course);
	const { user } = useTypedSelector(state => state.user);
	const { getSection, getLesson } = useActions();
	const router = useRouter();

	useEffect(() => {
		getSection({ courseId: course?._id, callback: () => {} });
	}, [course]);

	const onLesson = (lesson: LessonType) => {
		getLesson(lesson);
		localStorage.setItem(`${course?._id}`, lesson._id);
		const link = `/courses/dashboard/${course?.slug}`;

		router.replace(
			{ pathname: link, query: { lesson: lesson._id } },
			undefined,
			{ shallow: true }
		);
	};

	useEffect(() => {
		const lessonId = localStorage.getItem(course?._id as string);

		const currentModuleId = sections.find(item =>
			item.lessons.map(c => c._id).includes(lessonId as string)
		)?._id;

		const findIndex = sections
			.map(c => c._id)
			.indexOf(currentModuleId as string);

		setModuleIndex(findIndex === -1 ? 0 : findIndex);
	}, [sections]);

	const onComplete = async (
		evt: ChangeEvent<HTMLInputElement>,
		lessonID: string
	) => {
		setIsComplete(true);

		try {
			if (evt.target.checked) {
				await $axios.put(`${getLessonUrl('complete')}/${lessonID}`);
			} else {
				await $axios.put(`${getLessonUrl('uncomplete')}/${lessonID}`);
			}
			setIsComplete(false);
		} catch (error) {
			console.log(error);
			setIsComplete(false);
		}
	};

	return (
		<Box
			position={'fixed'}
			top={'12vh'}
			right={'2vh'}
			bottom={'2vh'}
			w={'400px'}
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
			borderRadius={'lg'}
			boxShadow={'xl'}
			p={5}
			zIndex={9}
			transition={'all .5s'}
			overflowY={'scroll'}
			css={{
				'&::-webkit-scrollbar': { width: '1px' },
				'&::-webkit-scrollbar-track': { width: '1px' },
				'&::-webkit-scrollbar-thumb': { background: 'transparent' },
			}}
			{...props}
		>
			{pendingSection ? (
				<Center alignItems={'center'} h={'full'}>
					<Spinner
						thickness='4px'
						speed='0.65s'
						emptyColor='gray.600'
						color='green.200'
						size='xl'
					/>
				</Center>
			) : (
				<>
					<Heading fontSize={'2xl'}>Kurs bo'limlari</Heading>
					<Flex align={'center'} gap={2} mt={3}>
						{sections.length}ta Bo'lim <Icon as={GoPrimitiveDot} />{' '}
						{sections
							.map(c => c.lessons.length)
							.reduce((a, b) => +a + +b, 0)}
						ta Darslik
					</Flex>

					<Accordion mb={5} mr={2} index={moduleIndex}>
						{sections.map((section, idx) => (
							<AccordionItem
								key={section._id}
								borderRadius={'8px'}
								mt={5}
							>
								<AccordionButton
									height={'60px'}
									background={useColorModeValue(
										'gray.100',
										'gray.700'
									)}
									borderRadius={'md'}
									_hover={{}}
									fontWeight={'bold'}
									onClick={() => setModuleIndex(idx)}
								>
									<Box flex='1' textAlign='left'>
										<AccordionIcon />
										{section.title}
									</Box>
								</AccordionButton>
								<AccordionPanel px={0} pb={4}>
									{section.lessons.map(lesson => (
										<Box
											key={lesson._id}
											_hover={{
												background: useColorModeValue(
													'gray.100',
													'gray.800'
												),
											}}
											transition={'all .3s ease'}
											borderRadius={'md'}
											onClick={() => onLesson(lesson)}
											bg={
												router.query.lesson === lesson._id
													? useColorModeValue('gray.100', 'gray.800')
													: 'transparent'
											}
											fontWeight={
												router.query.lesson === lesson._id
													? 'bold'
													: 'normal'
											}
											color={
												router.query.lesson === lesson._id
													? 'facebook.500'
													: 'normal'
											}
										>
											<Flex
												justify={'space-between'}
												mt={2}
												cursor={'pointer'}
												align={'center'}
												p={4}
											>
												<Flex align={'center'} w={'8%'}>
													{user ? (
														<Checkbox
															colorScheme={'green'}
															onChange={e =>
																onComplete(e, lesson._id)
															}
															defaultChecked={lesson.completed.includes(
																user.id
															)}
															cursor={
																isComplete ? 'progress' : 'pointer'
															}
														/>
													) : null}
												</Flex>
												<Flex w={'92%'} justify={'space-between'}>
													<Text>{lesson.name}</Text>
													<Text textDecoration={'underline'} ml={1}>
														{getLessonTime(
															lesson.hour,
															lesson.minute,
															lesson.second
														)}
													</Text>
												</Flex>
											</Flex>
										</Box>
									))}
								</AccordionPanel>
							</AccordionItem>
						))}
					</Accordion>
				</>
			)}
		</Box>
	);
};

export default Sidebar;
