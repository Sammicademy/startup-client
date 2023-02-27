import { Box, Flex, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<Box
			pl={{ base: 0, lg: '320px' }}
			mt={10}
			w={'full'}
			borderTop={'1px'}
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
			borderTopColor={useColorModeValue('gray.200', 'gray.700')}
			h={'10vh'}
		>
			<Flex justify={'space-between'} align={'center'} h={'full'}>
				<Text>
					© {format(new Date(), 'yyyy')} Sammi. {t('footer', { ns: 'layout' })}
				</Text>
				<Flex gap={3} mr={10}>
					<IconButton icon={<FaTelegram />} colorScheme={'facebook'} variant={'outline'} aria-label={'telegram'} />
					<IconButton icon={<FaInstagram />} colorScheme={'facebook'} variant={'outline'} aria-label={'instagram'} />
					<IconButton icon={<FaYoutube />} colorScheme={'facebook'} variant={'outline'} aria-label={'youtube'} />
				</Flex>
			</Flex>
		</Box>
	);
};

export default Footer;
