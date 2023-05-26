import { Box, Card, CardBody, Container } from '@chakra-ui/react';
import Header from './header';
import Sidebar from './sidebar';

const DashboardPageComponent = () => {
	return (
		<>
			<Header />
			<Sidebar />
			<Box
				mt={'12vh'}
				marginRight={{ base: 2, lg: '450px' }}
				marginLeft={{ base: 2, lg: 5 }}
			>
				<Container maxW={'container.lg'}>
					<Card>
						<CardBody></CardBody>
					</Card>
				</Container>
			</Box>
		</>
	);
};

export default DashboardPageComponent;
