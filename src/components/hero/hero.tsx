import { Button, Card, CardBody, Grid, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import { FaJava } from 'react-icons/fa';
import { VscDebugStart } from 'react-icons/vsc';

const Hero = () => {
	return (
		<Card mt={10}>
			<CardBody p={10}>
				<Grid
					minH={'50vh'}
					gridTemplateColumns={{ base: '100%', md: '50% 50%' }}
					gap={5}
					justifyContent={'center'}
					alignContent={'center'}
				>
					<Stack spacing={3}>
						<Heading>Find A Perfect Online Course</Heading>
						<Text>You can access 7900+ different courses from 600 professional trainers for free</Text>
						<Grid gridTemplateColumns={{ base: '100%', md: '50% 50%' }} gap={5}>
							<Button h={14} colorScheme={'facebook'} rightIcon={<VscDebugStart />}>
								Start Learning
							</Button>
							<Button h={14} colorScheme={'facebook'} variant={'outline'}>
								Become Instructor
							</Button>
						</Grid>
					</Stack>
					<Icon as={FaJava} w={400} h={240} justifySelf={'center'} opacity={'.8'} />
				</Grid>
			</CardBody>
		</Card>
	);
};

export default Hero;
