import {
	Box,
	Button,
	Container,
	HStack,
	Icon,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { TbWorld } from 'react-icons/tb';
import { language, navigation } from 'src/config/constants';
import { SidebarProps } from './sidebar.props';

const Sidebar = ({ toggle }: SidebarProps): JSX.Element => {
	const router = useRouter();
	const { t, i18n } = useTranslation();

	const onLanguage = (lng: string) => {
		router.replace(router.asPath);
		i18n.changeLanguage(lng);
	};

	return (
		<Box
			zIndex={1001}
			w={{ base: 'full', lg: '300px' }}
			h={'90vh'}
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
			borderRight={'1px'}
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			pos={'fixed'}
			left={{ base: toggle ? 0 : '-100%', lg: 0 }}
			top={'10vh'}
			overflowY={'scroll'}
			css={{
				'&::-webkit-scrollbar': { width: '1px' },
				'&::-webkit-scrollbar-track': { width: '1px' },
				'&::-webkit-scrollbar-thumb': { background: 'transparent' },
			}}
			transition={'all .4s ease'}
		>
			<Container maxW={'container.xl'}>
				<Menu placement='bottom'>
					<MenuButton
						mt={4}
						w={'full'}
						as={Button}
						rightIcon={<TbWorld />}
						textTransform={'capitalize'}
						colorScheme={'gray'}
						variant={'outline'}
						display={{ base: 'block', md: 'none' }}
					>
						{i18n.resolvedLanguage}
					</MenuButton>
					<MenuList p={0}>
						{language.map(item => (
							<MenuItem
								key={item.lng}
								onClick={() => onLanguage(item.lng)}
								icon={<item.icon />}
								backgroundColor={i18n.resolvedLanguage === item.lng ? 'facebook.500' : ''}
							>
								{item.nativeLng}
							</MenuItem>
						))}
					</MenuList>
				</Menu>
				{navigation.map((item, idx) => (
					<Box key={idx} mt={10}>
						<Text>{t(item.title, { ns: 'layout' })}</Text>
						{item.links.map((nav, idx) => {
							const active = `/${router.pathname.split('/')[1]}` == nav.route;

							return (
								<Link href={`${nav.route}`} key={idx}>
									<Button
										colorScheme={'facebook'}
										variant={active ? 'solid' : 'ghost'}
										w={'full'}
										justifyContent={'flex-start'}
										h={14}
										mt={2}
									>
										<HStack gap={2}>
											<Icon as={nav.icon} />
											<Text>{t(nav.label, { ns: 'layout' })}</Text>
										</HStack>
									</Button>
								</Link>
							);
						})}
					</Box>
				))}
			</Container>
		</Box>
	);
};

export default Sidebar;
