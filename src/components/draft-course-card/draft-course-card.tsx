import { Box, Button, Divider, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';
import { DraftCourseCardProps } from './draft-course-card.props';

const DraftCourseCard: FC<DraftCourseCardProps> = ({ item, status }): JSX.Element => {
	return (
		<Box
			key={item.title}
			mt={5}
			p={5}
			border={'1px'}
			borderRadius={'lg'}
			borderColor={useColorModeValue('gray.200', 'gray.700')}
			boxShadow={'dark-lg'}
		>
			<Box pos={'relative'} w={'100%'} h={'200px'}>
				<Image
					src={item.image}
					alt={item.title}
					fill
					style={{ objectFit: 'cover', borderRadius: '10px' }}
				/>
			</Box>
			<Divider my={6} />
			<Stack spacing={5}>
				<Heading>{item.title}</Heading>
				<Text fontWeight={'bold'} color={'facebook.500'}>
					Status:{' '}
					<Box as={'span'} color={status == 'Active' ? 'green.500' : 'red.500'}>
						{status}
					</Box>
				</Text>
				<Button colorScheme={'facebook'} h={14} variant={'outline'}>
					{status === 'Draft' ? 'Activate' : 'Draft'}
				</Button>
			</Stack>
		</Box>
	);
};

export default DraftCourseCard;
