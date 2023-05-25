import {
	Box,
	Button,
	Flex,
	Radio,
	RadioGroup,
	Stack,
	Text,
	useColorMode,
	useColorModeValue,
	useToast,
} from '@chakra-ui/react';
import {
	AddressElement,
	CardCvcElement,
	CardExpiryElement,
	CardNumberElement,
	useElements,
	useStripe,
} from '@stripe/react-stripe-js';
import { StripeAddressElement } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import { useState } from 'react';
import $axios from 'src/api/axios';
import { getCourseUrl, getMailUrl } from 'src/config/api.config';
import { getTotalPrice } from 'src/helpers/total-price.helper';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { CardType } from 'src/interfaces/constants.interface';
import ErrorAlert from '../error-alert/error-alert';

export default function CheckoutForm({
	cards,
}: {
	cards: CardType[];
}) {
	const stripe = useStripe();
	const elements = useElements();

	const [error, setError] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [radioValue, setRadioValue] = useState<string>('0');

	const { courses, books, product } = useTypedSelector(
		state => state.cart
	);
	const { colorMode } = useColorMode();
	const router = useRouter();
	const { getBooks, checkAuth } = useActions();
	const toast = useToast();

	const cardStyles = {
		base: {
			color: colorMode === 'light' ? '#000' : '#fff',
			fontSmoothing: 'antialiased',
			fontSize: '16px',
			'::placeholder': {
				color:
					colorMode === 'light'
						? 'rgba(0,0,0,.5)'
						: 'rgba(255,255,255,.4)',
				opacity: '0.7',
			},
		},
		ivalid: {
			color: '#fa755a',
			iconColor: '#fa755a',
		},
	};

	const handleSubmit = async () => {
		if (!stripe || !elements) return;

		setIsLoading(true);

		const addressElement = elements.getElement(
			'address'
		) as StripeAddressElement;

		const { value } = await addressElement.getValue();

		const { error, paymentMethod } = await stripe.createPaymentMethod(
			{
				// @ts-ignore
				type: 'card',
				card: elements.getElement(CardNumberElement),
				billing_details: {
					address: value.address,
					name: value.name,
				},
			}
		);

		if (error) {
			setError(
				`Your payment details couldn't be verified: ${error.message}`
			);
			console.log(error);
			setIsLoading(false);
		} else {
			paymentIntent(paymentMethod.id);
		}
	};

	const savedCardhander = (paymentMethod: string) => {
		setIsLoading(true);
		paymentIntent(paymentMethod);
	};

	const paymentIntent = async (paymentMethod: string) => {
		if (!stripe) return;

		try {
			if (product.id) {
				await $axios.post(`/payment/create-subscription`, {
					price: product.default_price.id,
					paymentMethod: paymentMethod,
				});

				toast({
					title: 'Successfully purchased',
					position: 'top-right',
				});
				router.push('/shop/success');
			} else {
				if (books.length) {
					const { data } = await $axios.post(`/payment/books`, {
						price: getTotalPrice(courses, books),
						paymentMethod: paymentMethod,
					});

					const payload = await stripe.confirmCardPayment(data);

					if (payload.error) {
						setIsLoading(false);
						setError(
							`Your payment details couldn't be verified: ${payload.error.message}`
						);
					} else {
						for (const book of books) {
							await $axios.post(`${getMailUrl('books')}/${book._id}`);
						}
						getBooks([]);
						if (!courses.length) {
							router.push('/shop/success');
						}
					}
				}

				if (courses.length) {
					let counter = courses.length;
					for (const course of courses) {
						const { data } = await $axios.post(`/payment/courses`, {
							price: course.price,
							paymentMethod: paymentMethod,
							courseId: course._id,
						});

						const payload = await stripe.confirmCardPayment(data);

						if (payload.error) {
							setIsLoading(false);
							setError(
								`Your payment details couldn't be verified: ${payload.error.message}`
							);
						} else {
							counter -= 1;
							toast({
								title: course.title,
								description: 'Successfully purchased',
								position: 'top-right',
							});
							await $axios.put(
								`${getCourseUrl('enroll-user')}/${course._id}`
							);
						}

						if (counter == 0) {
							checkAuth();
							router.push('/shop/success');
						}
					}
				}
			}
		} catch (error) {
			const result = error as Error;
			setIsLoading(false);
			setError(result.message);
		}
	};

	return (
		<Stack>
			{error && (
				<ErrorAlert title={error} clearHandler={() => setError('')} />
			)}
			<RadioGroup onChange={setRadioValue} value={radioValue}>
				<Stack direction={'column'}>
					{cards.map((card, idx) => (
						<Box
							key={card.id}
							p='4'
							border={'1px'}
							borderColor={useColorModeValue(
								'rgba(0,0,0,.1)',
								'rgba(255,255,255,.1)'
							)}
							bg={useColorModeValue('white', '#30303d')}
						>
							<Flex>
								<Radio value={`${idx}`}>
									{card.billing_details.name} |
								</Radio>
								<Text
									ml={2}
									fontWeight={'bold'}
									textTransform={'capitalize'}
								>
									{card.card.brand} {card.card.last4}
								</Text>
							</Flex>
							<Text ml={6}>
								Exp {card.card.exp_month} / {card.card.exp_year}
							</Text>
							{radioValue === `${idx}` && (
								<Box mt={5}>
									<Button
										w={'full'}
										h={'14'}
										isLoading={isLoading}
										isActive
										onClick={() => savedCardhander(card.id)}
										colorScheme={'facebook'}
									>
										Pay now{' '}
										{product.id
											? (
													product.default_price.unit_amount / 100
											  ).toLocaleString('en-US', {
													style: 'currency',
													currency: 'USD',
											  })
											: getTotalPrice(courses, books).toLocaleString(
													'en-US',
													{
														style: 'currency',
														currency: 'USD',
													}
											  )}
									</Button>
								</Box>
							)}
						</Box>
					))}
					<Box
						p='4'
						border={'1px'}
						borderColor={useColorModeValue(
							'rgba(0,0,0,.1)',
							'rgba(255,255,255,.1)'
						)}
						bg={useColorModeValue('white', '#30303d')}
					>
						<Radio value={`${cards.length + 1}`}>
							New Credit card
						</Radio>
					</Box>
				</Stack>
			</RadioGroup>
			{radioValue === `${cards.length + 1}` && (
				<>
					<Flex gap={2}>
						<Box
							px={2}
							py={3}
							w={'60%'}
							boxShadow={
								colorMode === 'dark'
									? '0px 2px 4px rgba(0, 0, 0, 0.5), 0px 1px 6px rgba(0, 0, 0, 0.25)'
									: ''
							}
							borderRadius={'md'}
							border={'1px'}
							borderColor={useColorModeValue(
								'rgba(0,0,0,.1)',
								'rgba(255,255,255,.1)'
							)}
							bg={useColorModeValue('white', '#30303d')}
						>
							<CardNumberElement
								options={{
									style: cardStyles,
									placeholder: 'XXXX XXXX XXXX XXXX',
									showIcon: true,
								}}
							/>
						</Box>
						<Box
							px={2}
							w='20%'
							py={3}
							boxShadow={
								colorMode === 'dark'
									? '0px 2px 4px rgba(0, 0, 0, 0.5), 0px 1px 6px rgba(0, 0, 0, 0.25)'
									: ''
							}
							borderRadius={'md'}
							border={'1px'}
							borderColor={useColorModeValue(
								'rgba(0,0,0,.1)',
								'rgba(255,255,255,.1)'
							)}
							bg={useColorModeValue('white', '#30303d')}
						>
							<CardExpiryElement options={{ style: cardStyles }} />
						</Box>
						<Box
							px={2}
							w='20%'
							py={3}
							boxShadow={
								colorMode === 'dark'
									? '0px 2px 4px rgba(0, 0, 0, 0.5), 0px 1px 6px rgba(0, 0, 0, 0.25)'
									: ''
							}
							borderRadius={'md'}
							border={'1px'}
							borderColor={useColorModeValue(
								'rgba(0,0,0,.1)',
								'rgba(255,255,255,.1)'
							)}
							bg={useColorModeValue('white', '#30303d')}
						>
							<CardCvcElement
								options={{
									style: cardStyles,
									placeholder: 'Security code',
								}}
							/>
						</Box>
					</Flex>
					<AddressElement options={{ mode: 'billing' }} />
					<Button
						w={'full'}
						h={'14'}
						mt={5}
						isDisabled={isLoading || !stripe || !elements}
						isLoading={isLoading}
						boxShadow={'xl'}
						onClick={handleSubmit}
					>
						Pay now{' '}
						{product.id
							? (
									product.default_price.unit_amount / 100
							  ).toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD',
							  })
							: getTotalPrice(courses, books).toLocaleString(
									'en-US',
									{
										style: 'currency',
										currency: 'USD',
									}
							  )}
					</Button>
				</>
			)}
		</Stack>
	);
}
