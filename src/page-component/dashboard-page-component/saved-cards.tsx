import { Box, Grid, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { SavedCardsProps } from './dashboard.props';

const SavedCards: FC<SavedCardsProps> = ({
	savedCards,
}): JSX.Element => {
	return (
		<Grid gridTemplateColumns={'1fr 1fr'} gap={5}>
			{savedCards.map(card => (
				<Box border={'1px'} p={5} borderRadius={'lg'} key={card.id}>
					<Text>
						{card.billing_details.name} |{' '}
						<Box as={'span'} fontWeight={'bold'}>
							{card.card.brand} {card.card.last4}
						</Box>
					</Text>
					<Text>
						EXP: {card.card.exp_month}/{card.card.exp_year}
					</Text>
				</Box>
			))}
		</Grid>
	);
};

export default SavedCards;
