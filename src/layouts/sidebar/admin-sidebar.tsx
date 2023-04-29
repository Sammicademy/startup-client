import {
	Box,
	Button,
	Container,
	Divider,
	HStack,
	Icon,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { adminSidebar, language } from 'src/config/constants';
import { DarkLogo, LightLogo } from 'src/icons';

const AdminSidebar = () => {
	const { toggleColorMode, colorMode } = useColorMode();
	const { i18n } = useTranslation();
	const router = useRouter();

	const onLanguage = (lng: string) => {
		router.replace(router.asPath);
		i18n.changeLanguage(lng);
	};

	return (
		<Box
			width={'420px'}
			h={'100vh'}
			pos={'fixed'}
			left={0}
			top={0}
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
		>
			<Container mt={5}>
				<HStack justify={'space-between'}>
					<Link href={'/'}>{colorMode === 'light' ? <DarkLogo /> : <LightLogo />}</Link>
					<HStack>
						<Menu placement='bottom'>
							<MenuButton
								as={Button}
								rightIcon={<TbWorld />}
								textTransform={'capitalize'}
								colorScheme={'gray'}
								variant={'outline'}
								display={{ base: 'none', md: 'block' }}
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
						<IconButton
							icon={colorMode == 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
							colorScheme={'facebook'}
							variant={'ghost'}
							aria-label={'color-mode'}
							onClick={toggleColorMode}
						/>
					</HStack>
				</HStack>
				<Divider my={5} />
				{adminSidebar.map((item, idx) => {
					const active = `/admin/${router.pathname.split('/')[2]}` == `/admin/${item.route}`;

					return (
						<Link href={`/admin/${item.route}`} key={idx}>
							<Button
								colorScheme={'facebook'}
								variant={active ? 'solid' : 'ghost'}
								w={'full'}
								justifyContent={'flex-start'}
								h={14}
								mt={5}
							>
								<HStack gap={2}>
									<Icon as={item.icon} />
									<Text>{item.name}</Text>
								</HStack>
							</Button>
						</Link>
					);
				})}
			</Container>
		</Box>
	);
};

export default AdminSidebar;
