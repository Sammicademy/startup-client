import { Box, Flex, Stat, StatLabel, StatNumber, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
import { StatsCardProps } from './stats-card.props';

const StatsCard: FC<StatsCardProps> = ({ icon, stat, title }): JSX.Element => {
	return (
		<Stat
			px={{ base: 2, md: 4 }}
			py={'5'}
			shadow={'xl'}
			border={'1px solid'}
			borderColor={useColorModeValue('gray.800', 'gray.500')}
			rounded={'lg'}
		>
			<Flex justifyContent={'space-between'}>
				<Box pl={{ base: 2, md: 4 }}>
					<StatLabel fontWeight={'medium'} isTruncated>
						{title}
					</StatLabel>
					<StatNumber fontSize={'2xl'} fontWeight={'medium'}>
						{stat}
					</StatNumber>
				</Box>
				<Box my={'auto'} color={useColorModeValue('gray.800', 'gray.200')} alignContent={'center'}>
					{icon}
				</Box>
			</Flex>
		</Stat>
	);
};

export default StatsCard;
