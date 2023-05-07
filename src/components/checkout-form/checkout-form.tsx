import { Box, Button, Flex, Stack, useColorMode, useColorModeValue } from '@chakra-ui/react';
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
import { getTotalPrice } from 'src/helpers/total-price.helper';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import ErrorAlert from '../error-alert/error-alert';

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const { colorMode } = useColorMode();

	const [message, setMessage] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const { courses, books } = useTypedSelector(state => state.cart);
	const router = useRouter();
	const { getBooks } = useActions();

	const cardStyles = {
		base: {
			color: colorMode === 'light' ? '#000' : '#fff',
			fontSmoothing: 'antialiased',
			fontSize: '16px',
			'::placeholder': {
				color: colorMode === 'light' ? 'rgba(0,0,0,.5)' : 'rgba(255,255,255,.4)',
				opacity: '0.7',
			},
		},
		ivalid: {
			color: '#fa755a',
			iconColor: '#fa755a',
		},
	};

	const onSubmit = async () => {
		if (!elements || !stripe) {
			return;
		}
		setIsLoading(true);
		const addressElement = elements.getElement('address') as StripeAddressElement;

		const { value } = await addressElement.getValue();

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardNumberElement),
			billing_details: {
				address: value.address,
				name: `${value.firstName as string} ${value.lastName as string}`,
			},
		});

		if (error) {
			setMessage(`Your payment details couldn't be verified: ${error.message}`);
			setIsLoading(false);
		} else {
			const { data } = await $axios.post(`/payment/books`, {
				price: getTotalPrice(courses, books),
				paymentMethod: paymentMethod.id,
			});

			const payload = await stripe.confirmCardPayment(data);

			if (payload.error) {
				setIsLoading(false);
				setMessage(`Your payment details couldn't be verified: ${payload.error.message}`);
			} else {
				for (const book of books) {
					await $axios.post(`/mail/books`, {
						bookId: book._id,
					});
				}
				getBooks([]);
				router.push('/shop/success');
				setIsLoading(false);
			}
		}
	};

	return (
		<Stack>
			{message && <ErrorAlert title={message} clearHandler={() => setMessage('')} />}
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
					borderColor={useColorModeValue('rgba(0,0,0,.1)', 'rgba(255,255,255,.1)')}
					bg={useColorModeValue('white', '#30303d')}
				>
					<CardNumberElement
						options={{ style: cardStyles, placeholder: 'XXXX XXXX XXXX XXXX', showIcon: true }}
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
					borderColor={useColorModeValue('rgba(0,0,0,.1)', 'rgba(255,255,255,.1)')}
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
					borderColor={useColorModeValue('rgba(0,0,0,.1)', 'rgba(255,255,255,.1)')}
					bg={useColorModeValue('white', '#30303d')}
				>
					<CardCvcElement options={{ style: cardStyles, placeholder: 'Security code' }} />
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
				onClick={onSubmit}
			>
				Pay now{' '}
				{getTotalPrice(courses, books).toLocaleString('en-US', {
					style: 'currency',
					currency: 'USD',
				})}
			</Button>
		</Stack>
	);
};

export default CheckoutForm;
