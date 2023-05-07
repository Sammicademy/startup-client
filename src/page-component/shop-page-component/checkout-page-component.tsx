import {
	Box,
	Divider,
	Grid,
	GridItem,
	HStack,
	Text,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import { Fragment } from 'react';
import { CheckoutForm } from 'src/components';
import SectionTitle from 'src/components/section-title/section-title';
import { loadImage } from 'src/helpers/image.helper';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { CardType } from 'src/interfaces/constants.interface';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const CheckoutPageComponent = ({ cards }: { cards: CardType[] }) => {
	const { books } = useTypedSelector(state => state.cart);
	const { colorMode } = useColorMode();

	return (
		<>
			<SectionTitle
				title={'Checkout'}
				subtitle={'We’re on a mission to deliver engaging, curated courses at a reasonable price.'}
			/>
			<Grid gridTemplateColumns={'70% 30%'} gap={5}>
				<GridItem>
					<Divider my={5} />

					<Elements
						stripe={stripePromise}
						options={{ appearance: { theme: colorMode === 'dark' ? 'night' : 'stripe' } }}
					>
						<CheckoutForm cards={cards} />
					</Elements>
				</GridItem>
				<GridItem
					mt={10}
					borderLeft={'1px'}
					p={5}
					borderColor={useColorModeValue('gray.200', 'gray.700')}
				>
					<Text fontSize={'2xl'} fontWeight={'bold'}>
						Order details
					</Text>
					{books.map(book => (
						<Fragment key={book._id}>
							<HStack justify={'space-between'}>
								<HStack>
									<Box pos={'relative'} w={'40px'} h={'30px'}>
										<Image
											src={loadImage(book.image)}
											fill
											alt={book.title}
											style={{ objectFit: 'cover' }}
										/>
									</Box>
									<Text>{book.title}</Text>
								</HStack>
								<Text fontWeight={'bold'} color={'facebook.500'}>
									{book.price.toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD',
									})}
								</Text>
							</HStack>
							<Divider my={5} />
						</Fragment>
					))}
				</GridItem>
			</Grid>
		</>
	);
};

export default CheckoutPageComponent;
