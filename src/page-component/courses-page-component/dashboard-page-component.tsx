import {
	Box,
	Card,
	CardBody,
	Container,
	Divider,
	Heading,
} from '@chakra-ui/react';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import Header from './header';
import Sidebar from './sidebar';

const DashboardPageComponent = () => {
	const { lesson } = useTypedSelector(state => state.lesson);

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
						<CardBody>
							<Box
								dangerouslySetInnerHTML={{
									__html: lesson.embedVideo,
								}}
							/>
						</CardBody>
					</Card>

					<Heading mt={5} as={'h2'}>
						{lesson.name}
					</Heading>
					<Divider mt={5} />
					<Box
						mb={10}
						mt={5}
						css={{
							a: { color: 'teal', textDecoration: 'underline' },
							li: { listStyle: 'none' },
						}}
						dangerouslySetInnerHTML={{
							__html: lesson.material,
						}}
					/>
				</Container>
			</Box>
		</>
	);
};

export default DashboardPageComponent;
