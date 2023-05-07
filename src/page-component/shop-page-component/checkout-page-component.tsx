import {
	Box,
	Divider,
	Grid,
	GridItem,
	HStack,
	Skeleton,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { CheckoutForm } from 'src/components';
import SectionTitle from 'src/components/section-title/section-title';
import { loadImage } from 'src/helpers/image.helper';
import { getTotalPrice } from 'src/helpers/total-price.helper';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { PaymentService } from 'src/services/payment.service';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const CheckoutPageComponent = () => {
	const [clientSecret, setClientSecret] = useState('');

	const { books, courses } = useTypedSelector(state => state.cart);

	useEffect(() => {
		const getClientSecret = async () => {
			const response = await PaymentService.paymentBooks(getTotalPrice(courses, books));
			setClientSecret(response);
		};

		getClientSecret();
	}, []);

	return (
		<>
			<SectionTitle
				title={'Checkout'}
				subtitle={'We’re on a mission to deliver engaging, curated courses at a reasonable price.'}
			/>
			<Grid gridTemplateColumns={'70% 30%'} gap={5}>
				<GridItem>
					<Divider my={5} />
					{clientSecret ? (
						<Elements
							stripe={stripePromise}
							options={{ clientSecret, appearance: { theme: 'night' } }}
						>
							<CheckoutForm />
						</Elements>
					) : (
						<Stack>
							<HStack mt={10}>
								<Skeleton height={12} w={'50%'} />
								<Skeleton height={12} w={'25%'} />
								<Skeleton height={12} w={'25%'} />
							</HStack>
							<Skeleton height={12} w={'100%'} mt={5} />
							<Skeleton height={12} w={'100%'} mt={5} />
							<Skeleton height={14} w={'100%'} mt={5} />
						</Stack>
					)}
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
