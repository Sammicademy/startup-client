import { Divider, HStack, Stack, Text } from '@chakra-ui/react';
import { format } from 'date-fns';

const Transactions = () => {
	return (
		<>
			<HStack justify={'space-between'}>
				<Text fontSize={'xl'} fontWeight={'bold'}>
					Information
				</Text>
				<Text fontSize={'xl'} fontWeight={'bold'}>
					Transactions
				</Text>
			</HStack>
			<Divider my={5} />
			<HStack justify={'space-between'} align={'flex-start'}>
				<Stack>
					<Text
						fontWeight={'bold'}
						color={'facebook.300'}
						fontSize={'xl'}
					>
						ReactJS kurs
					</Text>
					<Text>{format(new Date(), 'dd MMMM, yyyy')}</Text>
				</Stack>
				<Text fontSize={'2xl'} fontWeight={'bold'}>
					12.00$
				</Text>
			</HStack>
		</>
	);
};

export default Transactions;
