import { Box, Button, Card, CardBody, Input, Stack } from '@chakra-ui/react';
import SectionTitle from '../section-title/section-title';

const Newsletter = () => {
	return (
		<Card mt={10}>
			<CardBody minH={'50vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
				<Stack spacing={3}>
					<SectionTitle
						textAlign={'center'}
						maxW={'container.sm'}
						title='Subscribe our Newsletter &'
						subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
					/>
					<Box pos={'relative'}>
						<Input
							h={14}
							w={'full'}
							bg={'white'}
							color={'gray.900'}
							placeholder={'Your email...'}
							_placeholder={{ color: 'gray.500' }}
						/>
						<Button pos={'absolute'} right={2} top={2} colorScheme={'facebook'} zIndex={999}>
							Submit
						</Button>
					</Box>
				</Stack>
			</CardBody>
		</Card>
	);
};

export default Newsletter;
