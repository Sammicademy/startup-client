import { Collapse, Flex, Icon, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi';
import LessonForm from '../lesson-form/lesson-form';

const LessonAccordionItem = ({ lesson }) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<>
			<Flex
				py={3}
				w={'full'}
				cursor={'pointer'}
				justify={'space-between'}
				align={'center'}
				borderColor={useColorModeValue('gray.200', 'gray.600')}
			>
				<Flex align={'center'} gap={2} w={'80%'}>
					<Icon as={FaEdit} onClick={onToggle} />
					<Text>{lesson.name}</Text>
				</Flex>
				<Flex gap={3}>
					<Icon as={FiDelete} cursor={'pointer'} />
				</Flex>
			</Flex>
			<Collapse in={isOpen} animateOpacity>
				<LessonForm />
			</Collapse>
		</>
	);
};

export default LessonAccordionItem;
