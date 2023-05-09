import {
	Box,
	Button,
	Divider,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	IconButton,
	Input,
	Stack,
	Tag,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import SectionTitle from 'src/components/section-title/section-title';
import { loadImage } from 'src/helpers/image.helper';
import { getTotalPrice } from 'src/helpers/total-price.helper';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';

const CartPageComponent = () => {
	const cart = useTypedSelector(state => state.cart);
	const router = useRouter();

	const getSubtitle = () => {
		let textCourse: string = '';
		let textBooks: string = '';
		const courses = cart.courses;
		const books = cart.books;

		textCourse = courses.length ? `${courses.length} Courses in cart` : '';
		textBooks = books.length ? `${books.length} Books in cart` : '';
		const isAnd = courses.length ? true : false;

		return `${textCourse} ${isAnd ? 'and' : ''} ${textBooks}`;
	};

	return (
		<>
			<SectionTitle title={'Shopping cart'} subtitle={getSubtitle()} />
			<Grid gridTemplateColumns={'70% 30%'} gap={5}>
				<GridItem>
					<Divider my={5} />
					{cart.books.map(book => (
						<Fragment key={book._id}>
							<ShoppingCartCard item={book} image={book.image} />
							<Divider my={5} />
						</Fragment>
					))}
					{cart.courses.map(book => (
						<Fragment key={book._id}>
							<ShoppingCartCard item={book} image={book.previewImage} />
							<Divider my={5} />
						</Fragment>
					))}
				</GridItem>
				<GridItem>
					<Stack
						mt={5}
						border={'1px'}
						borderRadius={'md'}
						borderColor={useColorModeValue('gray.200', 'gray.700')}
						p={5}
					>
						<Text fontWeight={'bold'} fontSize={'xl'} opacity={'.7'}>
							Total:
						</Text>
						<Heading>
							{getTotalPrice(cart.courses, cart.books).toLocaleString('en-US', {
								style: 'currency',
								currency: 'USD',
							})}
						</Heading>
						<Button
							h={14}
							colorScheme={'facebook'}
							borderRadius={0}
							onClick={() => router.push('/shop/checkout')}
						>
							Checkout
						</Button>
						<Divider />
						<Text fontWeight={'bold'} fontSize={'lg'}>
							Promotions
						</Text>
						<Box pos={'relative'} mt={5}>
							<Input
								w={'full'}
								bg={'white'}
								color={'gray.900'}
								placeholder={'Enter coupon'}
								_placeholder={{ color: 'gray.500' }}
								borderRadius={0}
							/>
							<Button
								pos={'absolute'}
								right={0}
								top={0}
								colorScheme={'facebook'}
								zIndex={999}
								borderRadius={0}
							>
								Apply
							</Button>
						</Box>
					</Stack>
				</GridItem>
			</Grid>
		</>
	);
};

export default CartPageComponent;

const ShoppingCartCard = ({ item, image }) => {
	const { removeBookFromCart, removeCourseFromCart } = useActions();

	const removeCartItem = () => {
		if (item.previewImage) {
			removeCourseFromCart(item._id);
		} else {
			removeBookFromCart(item._id);
		}
	};

	return (
		<Flex justify={'space-between'}>
			<HStack>
				<Box pos={'relative'} w={'200px'} h={'100px'}>
					<Image
						fill
						src={loadImage(image)}
						alt={item.title}
						style={{ objectFit: 'cover', borderRadius: '10px' }}
					/>
				</Box>
				<Stack>
					<Heading fontSize={'xl'}>{item.title}</Heading>
					<Text>by Admin Platform</Text>
					<HStack>
						<Tag colorScheme={'facebook'}>Books</Tag>
						<Tag colorScheme={'facebook'}>Usefull</Tag>
						<Tag colorScheme={'facebook'} textTransform={'capitalize'}>
							{item.category}
						</Tag>
					</HStack>
				</Stack>
			</HStack>
			<Stack spacing={0}>
				<Text color={'facebook.300'} fontSize={'2xl'} fontWeight={'bold'}>
					{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
				</Text>
				<IconButton
					aria-label='remove'
					icon={<BsFillTrashFill />}
					colorScheme={'red'}
					onClick={removeCartItem}
				/>
			</Stack>
		</Flex>
	);
};
