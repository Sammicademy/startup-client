import {
	Button,
	Heading,
	List,
	ListIcon,
	ListItem,
	Stack,
	useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle } from 'react-icons/fa';
import { useActions } from 'src/hooks/useActions';
import { PricingProps } from './pricing.props';

const Pricing = ({ options, price, title, checked, product }: PricingProps) => {
	const { t } = useTranslation();
	const { addProductToCart } = useActions();
	const router = useRouter();

	const colorTextLight = checked ? 'white' : 'facebook.600';
	const bgColorLight = checked ? 'facebook.400' : 'gray.300';

	const colorTextDark = checked ? 'white' : 'facebook.500';
	const bgColorDark = checked ? 'facebook.400' : 'gray.300';

	const addProductToCartHandler = () => {
		addProductToCart(product);
		router.push('/shop/checkout');
	};

	return (
		<Stack
			p={3}
			py={3}
			justifyContent={{ base: 'flex-start', md: 'space-around' }}
			direction={{ base: 'column', md: 'row' }}
			alignItems={{ md: 'center' }}
		>
			<Heading size={'md'}>{title}</Heading>
			<List spacing={3} textAlign='start'>
				{options.map(item => (
					<ListItem key={item.id}>
						<ListIcon as={FaCheckCircle} color='green.500' />
						{item.desc}
					</ListItem>
				))}
			</List>
			<Heading size={'xl'}>
				{price.toLocaleString('en-US', { currency: 'USD', style: 'currency' })}
			</Heading>
			<Stack>
				<Button
					size='md'
					color={useColorModeValue(colorTextLight, colorTextDark)}
					bgColor={useColorModeValue(bgColorLight, bgColorDark)}
					onClick={addProductToCartHandler}
				>
					{t('pricing_btn', { ns: 'global' })}
				</Button>
			</Stack>
		</Stack>
	);
};

export default Pricing;
