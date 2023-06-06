import { Box, Grid, Text } from '@chakra-ui/react';

const SavedCards = () => {
	return (
		<Grid gridTemplateColumns={'1fr 1fr'} gap={5}>
			<Box border={'1px'} p={5} borderRadius={'lg'}>
				<Text>
					Samar B |{' '}
					<Box as={'span'} fontWeight={'bold'}>
						Visa 4242
					</Box>
				</Text>
				<Text>EXP: 02/2024</Text>
			</Box>
		</Grid>
	);
};

export default SavedCards;
