import {
	Box,
	Button,
	Card,
	CardBody,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	HStack,
	IconButton,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Select,
	Text,
	useColorModeValue,
	useDisclosure,
	VStack,
} from '@chakra-ui/react';
import { CgAdd } from 'react-icons/cg';
import { FaEdit, FaTrash } from 'react-icons/fa';
import SectionTitle from 'src/components/section-title/section-title';
import { coursePrice } from 'src/config/constants';
import { PlanCurriculumIcon } from 'src/icons';

const BooksPageComponent = () => {
	const priceBackgroundColor = useColorModeValue('gray.200', 'gray.900');
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Card mt={10}>
				<CardBody>
					<HStack>
						<Box w={'30%'}>
							<SectionTitle title='Books' subtitle='All books and managing on platform' />
						</Box>
						<Flex w={'70%'} justify={'flex-end'}>
							<PlanCurriculumIcon />
						</Flex>
					</HStack>
				</CardBody>
			</Card>
			<Flex mt={5} justify={'flex-end'}>
				<IconButton
					colorScheme='facebook'
					aria-label='Search database'
					icon={<CgAdd />}
					onClick={onOpen}
				/>
			</Flex>
			<Grid
				gridTemplateColumns={{ base: 'repeat(100%)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
				gap={4}
				rowGap={20}
				mt={5}
			>
				{data.map(item => (
					<Box key={item.name} pos={'relative'}>
						<Image
							src={item.image}
							alt={item.name}
							borderRadius={'lg'}
							w={'full'}
							h={'250px'}
							objectFit={'cover'}
						/>

						<Flex
							pos={'absolute'}
							left={2}
							right={2}
							borderRadius={'lg'}
							boxShadow={'dark-lg'}
							bottom={'-10'}
							minH={'90px'}
							p={2}
							bg={priceBackgroundColor}
							flexDir={'column'}
						>
							<Box>
								<Text fontSize={'lg'}>{item.name}</Text>
								<Text fontSize={'2xl'}>
									{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
								</Text>
							</Box>
							<HStack>
								<Button w={'full'} rightIcon={<FaTrash />} colorScheme={'red'}>
									Delete
								</Button>
								<Button w={'full'} rightIcon={<FaEdit />} colorScheme={'green'}>
									Edit
								</Button>
							</HStack>
						</Flex>
					</Box>
				))}
			</Grid>

			<Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={'xl'}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add books</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<VStack>
							<FormControl isRequired>
								<FormLabel>Name</FormLabel>
								<Input type='text' h={14} placeholder={'Harry Poter'} colorScheme={'facebook'} />
							</FormControl>
							<FormControl isRequired>
								<FormLabel>Price</FormLabel>
								<Select
									borderRadius={'8px'}
									height={14}
									focusBorderColor={'green.500'}
									placeholder={'-'}
								>
									{coursePrice.map(option => (
										<option key={option} value={option}>
											{option.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
										</option>
									))}
								</Select>
							</FormControl>
							<FormControl isRequired>
								<FormLabel>PDF Link</FormLabel>
								<Input type='text' h={14} colorScheme={'facebook'} />
							</FormControl>
						</VStack>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={onClose}>
							Add books
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default BooksPageComponent;

const data = [
	{
		name: 'JavaScript - Design Pattern',
		image: 'https://ucarecdn.com/01292099-b782-4b74-a05e-f902be3feecd/',
		category: 'programming',
		price: 10,
	},
	{
		name: 'Proffessional ReactJS',
		image:
			'https://e1.pxfuel.com/desktop-wallpaper/595/427/desktop-wallpaper-js-posted-by-samantha-johnson-reactjs.jpg',
		category: 'programming',
		price: 40,
	},
	{
		name: 'HTML CSS - Web',
		image:
			'https://t3.ftcdn.net/jpg/04/86/60/44/360_F_486604480_EKKklldKqiwmvAunlEeF4QdI0dfjDojA.jpg',
		category: 'programming',
		price: 15,
	},
	{
		name: 'Backend Programming',
		image: 'http://wbsimms.com/wp-content/uploads/2016/07/NodeJsBackground.png',
		category: 'programming',
		price: 30,
	},

	{
		name: 'Proffessional Photoshop',
		image: 'https://wallpaperaccess.com/full/1533478.jpg',
		category: 'design',
		price: 90,
	},
	{
		name: 'Illustrator',
		image: 'https://images5.alphacoders.com/114/1147598.png',
		category: 'design',
		price: 20,
	},
	{
		name: 'Premier Pro',
		image: 'https://wallpaperaccess.com/full/3539123.jpg',
		category: 'design',
		price: 15,
	},

	{
		name: 'Startup',
		image: 'https://img.freepik.com/free-vector/illustration-startup-business_53876-18154.jpg',
		category: 'business',
		price: 30,
	},
	{
		name: 'Business idea',
		image:
			'https://c0.wallpaperflare.com/preview/931/296/849/business-idea-planning-board-business-plan-thumbnail.jpg',
		category: 'business',
		price: 24,
	},
	{
		name: 'Growth your plan',
		image:
			'https://online.stanford.edu/sites/default/files/styles/figure_default/public/you-have-a-business-idea-webinar-hero-image.jpg?itok=OaDnVEt0',
		category: 'business',
		price: 15,
	},

	{
		name: 'The History Of Website',
		image:
			'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
		category: 'history',
		price: 30,
	},
	{
		name: 'Internet',
		image: 'https://wallpapercave.com/wp/G2c4FdC.jpg',
		category: 'history',
		price: 54,
	},
	{
		name: 'Difference Web And Web-app',
		image: 'https://wallpapercave.com/wp/wp4312426.jpg',
		category: 'history',
		price: 12,
	},

	{
		name: 'Writing An Essay',
		image:
			'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZyUyMGhhbmR8ZW58MHx8MHx8&w=1000&q=80',
		category: 'writing',
		price: 54,
	},
	{
		name: 'Professional Essay',
		image: 'https://wallpapercave.com/wp/wp7110644.jpg',
		category: 'writing',
		price: 12,
	},
];
