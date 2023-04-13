import {
	Accordion,
	Card,
	CardBody,
	Divider,
	Flex,
	HStack,
	Icon,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Stack,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { SectionAccordion, SectionForm } from 'src/components';
import SectionTitle from 'src/components/section-title/section-title';
import { useTypedSelector } from 'src/hooks/useTypedSelector';

const CurriculumPageComponent = () => {
	const { course } = useTypedSelector(state => state.instructor);
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Card>
				<CardBody p={0}>
					<HStack justify={'center'}>
						<Image width={480} height={480} src='/images/curriculum.png' alt='curriculum' />
						<Stack>
							<SectionTitle
								title={course?.title as string}
								subtitle={`Manage curriculum for your  course`}
							/>
						</Stack>
					</HStack>
				</CardBody>
			</Card>

			<Card mt={10}>
				<CardBody>
					<Flex mb={5} justify={'space-between'} align={'center'}>
						<Text fontSize={'2xl'}>Create section</Text>
						<Icon as={BsFillPlusCircleFill} w={6} h={6} cursor={'pointer'} onClick={onOpen} />
					</Flex>

					<Accordion allowToggle>
						{sections.map(section => (
							<SectionAccordion key={section.title} section={section} />
						))}
					</Accordion>
				</CardBody>
			</Card>

			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create section</ModalHeader>
					<ModalCloseButton />
					<Divider />
					<ModalBody pb={5}>
						<SectionForm />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default CurriculumPageComponent;

const sections = [
	{
		title: '#1 Modul. ReactJS asoslari',
		lessons: [
			{
				name: '1-dars: ReactJS nima',
			},
			{
				name: '1-dars: ReactJS nima',
			},
			{
				name: '1-dars: ReactJS nima',
			},
			{
				name: '1-dars: ReactJS nima',
			},
			{
				name: '1-dars: ReactJS nima',
			},
			{
				name: '1-dars: ReactJS nima',
			},
			{
				name: '1-dars: ReactJS nima',
			},
			{
				name: '1-dars: ReactJS nima',
			},
			{
				name: '1-dars: ReactJS nima',
			},
			{
				name: '1-dars: ReactJS nima',
			},
			{
				name: '1-dars: ReactJS nima',
			},
			{
				name: '1-dars: ReactJS nima',
			},
		],
	},
	{
		title: '#2 Modul. VueJS asoslari',
		lessons: [
			{
				name: '1-dars: VueJS nima',
			},
			{
				name: '1-dars: VueJS nima',
			},
			{
				name: '1-dars: VueJS nima',
			},
			{
				name: '1-dars: VueJS nima',
			},
		],
	},
];
