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
	Skeleton,
	Stack,
	Text,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { SectionAccordion, SectionForm } from 'src/components';
import SectionTitle from 'src/components/section-title/section-title';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';

const CurriculumPageComponent = () => {
	const { course } = useTypedSelector(state => state.instructor);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { getSection } = useActions();
	const { pendingSection, sections } = useTypedSelector(state => state.section);
	const toast = useToast();

	useEffect(() => {
		getSection({
			courseId: course?._id,
			callback: () => {
				toast({ title: 'Successfully get sections', position: 'top-right', isClosable: true });
			},
		});
	}, [course]);

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
					{pendingSection ? (
						<Stack>
							<Skeleton height='20px' />
							<Skeleton height='20px' />
							<Skeleton height='20px' />
						</Stack>
					) : (
						<Accordion allowToggle>
							{sections.map(section => (
								<SectionAccordion key={section.title} section={section} />
							))}
						</Accordion>
					)}
				</CardBody>
			</Card>

			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create section</ModalHeader>
					<ModalCloseButton />
					<Divider />
					<ModalBody pb={5}>
						<SectionForm onClose={onClose} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default CurriculumPageComponent;
