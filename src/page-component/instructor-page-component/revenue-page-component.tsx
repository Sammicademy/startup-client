import {
	Card,
	CardBody,
	chakra,
	Divider,
	Heading,
	HStack,
	Icon,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FaFunnelDollar } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { SiFuturelearn } from 'react-icons/si';
import { StatsCard } from 'src/components';

const RevenuePageComponent = () => {
	return (
		<>
			<chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
				Hi Instructor, that's your revenue statistics
			</chakra.h1>
			<SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
				<StatsCard
					title={'Earn'}
					stat={Number('5000').toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
					icon={<AiOutlineDollarCircle size={'3em'} />}
				/>
				<StatsCard
					title={'Payouts'}
					stat={Number('1000').toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
					icon={<SiFuturelearn size={'3em'} />}
				/>
				<StatsCard
					title={'Balance'}
					stat={Number('500').toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
					icon={<MdOutlineAccountBalanceWallet size={'3em'} />}
				/>
			</SimpleGrid>
			<Card mt={20}>
				<CardBody>
					<HStack justify={'space-between'}>
						<Heading fontFamily={'mono'} letterSpacing={5}>
							Revenue report
						</Heading>
						<Icon as={FaFunnelDollar} fontSize={60} color={'facebook.400'} />
					</HStack>
					<Text>You get paid directly from stripe yo your bank account every 48 hours</Text>
					<Divider my={5} />
					<HStack justify={'space-between'}>
						<Heading fontFamily={'mono'} letterSpacing={5}>
							Pending balance
						</Heading>
						<Text fontSize={40} color={'facebook.400'}>
							{Number('500').toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
						</Text>
					</HStack>
					<Text>For 48 hours</Text>
					<Divider my={5} />
					<HStack justify={'space-between'}>
						<Heading fontFamily={'mono'} letterSpacing={5}>
							Payouts
						</Heading>
						<Icon as={FiSettings} fontSize={60} color={'facebook.400'} />
					</HStack>
					<Text>Update your account details or view previous payouts</Text>
				</CardBody>
			</Card>
		</>
	);
};

export default RevenuePageComponent;
