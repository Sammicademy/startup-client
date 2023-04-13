import {
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Button,
	Center,
	Collapse,
	Flex,
	Icon,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import ErrorAlert from '../error-alert/error-alert';
import LessonAccordionItem from '../lesson-accordion-item/lesson-accordion-item';
import LessonForm from '../lesson-form/lesson-form';
import { SectionAccordionProps } from './section-accordion.props';

const SectionAccordion = ({ section }: SectionAccordionProps) => {
	const { isOpen, onToggle } = useDisclosure();
	const { deleteSection, clearSectionError, getSection } = useActions();
	const { error, isLoading } = useTypedSelector(state => state.section);
	const { course } = useTypedSelector(state => state.instructor);
	const toast = useToast();

	const onDelete = () => {
		const isAgree = confirm('Are you sure?');

		if (isAgree) {
			deleteSection({
				sectionId: section._id,
				courseId: course?._id,
				callback: () => {
					toast({ title: 'Successfully deleted section', position: 'top-right', isClosable: true });
					getSection({
						courseId: course?._id,
						callback: () => {},
					});
				},
			});
		}
	};

	return (
		<AccordionItem>
			<>{error && <ErrorAlert title={error as string} clearHandler={clearSectionError} />}</>

			<AccordionButton h={14} p={2} fontWeight={'bold'} cursor={isLoading ? 'progress' : 'pointer'}>
				<Flex w={'100%'} align={'center'} justify={'space-between'}>
					<Flex align={'center'} gap={2}>
						<Icon as={AiOutlineMenu} w={5} h={5} />
						{section.title}
					</Flex>
					<Flex fontSize={'15px'} align={'center'} gap={3}>
						<Icon as={MdEdit} w={5} h={5} />
						<Icon as={MdDelete} w={5} h={5} onClick={onDelete} />
						<AccordionIcon />
					</Flex>
				</Flex>
			</AccordionButton>
			<AccordionPanel pb={4}>
				{section.lessons.map(lesson => (
					<LessonAccordionItem key={lesson.name} lesson={lesson} />
				))}
				<Center>
					<Button
						variant={'unstyled'}
						color={'facebook.200'}
						_hover={{ textDecoration: 'underline' }}
						onClick={onToggle}
					>
						{isOpen ? 'Close form' : 'Create lesson'}
					</Button>
				</Center>
				<Collapse in={isOpen} animateOpacity>
					<LessonForm />
				</Collapse>
			</AccordionPanel>
		</AccordionItem>
	);
};

export default SectionAccordion;
