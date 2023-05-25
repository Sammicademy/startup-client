import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	Heading,
	Icon,
	Skeleton,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { AiFillPlayCircle } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import { getLessonTime } from 'src/helpers/time.helper';
import { useTypedSelector } from 'src/hooks/useTypedSelector';

const Curriculum = () => {
	const { t } = useTranslation();
	const { sections, pendingSection } = useTypedSelector(
		state => state.section
	);

	return (
		<>
			<Heading mt={10}>{t('curriculum', { ns: 'courses' })}</Heading>
			{pendingSection ? (
				<Stack>
					<Skeleton height='20px' />
					<Skeleton height='20px' />
					<Skeleton height='20px' />
				</Stack>
			) : (
				<>
					<Flex align={'center'} gap={2} mt={3}>
						{sections.length} {t('modules', { ns: 'courses' })}{' '}
						<Icon as={GoPrimitiveDot} />{' '}
						{sections
							.map(c => c.lessons.length)
							.reduce((a, b) => +a + +b, 0)}{' '}
						{t('lessons', { ns: 'courses' })}
					</Flex>
					<Accordion defaultIndex={[0]} allowToggle mr={2}>
						{sections.map(m => (
							<AccordionItem
								key={m.title}
								border={'1px solid facebook.500'}
								borderRadius={'8px'}
								mt={5}
							>
								<AccordionButton
									height={'60px'}
									background={useColorModeValue(
										'facebook.500',
										'facebook.200'
									)}
									color={useColorModeValue('white', 'black')}
									borderRadius={'lg'}
									_hover={{
										backgroundColor: 'facebook.400',
									}}
									fontWeight={'bold'}
								>
									<Box flex='1' textAlign='left'>
										<AccordionIcon />
										{m.title}
									</Box>
									<Flex flex={0}>
										<Text fontSize={'sm'}>
											{m.lessons.length}ta&nbsp;Dars
										</Text>
									</Flex>
								</AccordionButton>
								<AccordionPanel pb={4}>
									{m.lessons.map(lesson => (
										<Flex
											key={lesson.name}
											justify={'space-between'}
											align={'center'}
											py={2}
										>
											<Flex align={'center'} gap={2} w={'80%'}>
												<Icon
													as={AiFillPlayCircle}
													color={'gray.600'}
													w={7}
													h={7}
												/>
												<Text>{lesson.name}</Text>
											</Flex>
											<Text fontSize={'sm'}>
												{getLessonTime(
													lesson.hour,
													lesson.minute,
													lesson.second
												)}
											</Text>
										</Flex>
									))}
								</AccordionPanel>
							</AccordionItem>
						))}
					</Accordion>
				</>
			)}
		</>
	);
};

export default Curriculum;
