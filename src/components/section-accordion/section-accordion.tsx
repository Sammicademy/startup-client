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
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdDelete, MdEdit } from 'react-icons/md';
import LessonAccordionItem from '../lesson-accordion-item/lesson-accordion-item';
import LessonForm from '../lesson-form/lesson-form';

const SectionAccordion = ({ section }) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<AccordionItem>
			<AccordionButton h={14} p={2} fontWeight={'bold'}>
				<Flex w={'100%'} align={'center'} justify={'space-between'}>
					<Flex align={'center'} gap={2}>
						<Icon as={AiOutlineMenu} w={5} h={5} />
						{section.title}
					</Flex>
					<Flex fontSize={'15px'} align={'center'} gap={3}>
						<Icon as={MdEdit} w={5} h={5} />
						<Icon as={MdDelete} w={5} h={5} />
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
