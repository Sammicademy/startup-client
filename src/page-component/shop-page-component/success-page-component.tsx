import { Button, Card, CardBody, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const SuccessPageComponent = () => {
	return (
		<Card>
			<CardBody>
				<Stack align={'center'} flexDirection={'column'}>
					<Icon as={BsFillPatchCheckFill} w={20} h={20} color={'green.500'} />
					<Heading>Your order is completed!</Heading>
					<Text>Thank you. Your order has been received.</Text>
					<Button w={'container.sm'} colorScheme={'facebook'} h={14}>
						Dashboard
					</Button>
					<Image width={480} height={480} src='/images/success.png' alt='curriculum' />
				</Stack>
			</CardBody>
		</Card>
	);
};

export default SuccessPageComponent;
