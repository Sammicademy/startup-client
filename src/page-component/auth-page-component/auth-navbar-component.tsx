import {
	Box,
	Button,
	Container,
	Flex,
	HStack,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiMenuAltLeft } from 'react-icons/bi';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { language, navigation } from 'src/config/constants';
import { DarkLogo, LightLogo } from 'src/icons';

const AuthNavbarComponent = () => {
	const [menu, setMenu] = useState(false);
	const { colorMode, toggleColorMode } = useColorMode();
	const { t, i18n } = useTranslation();
	const linkHover = useColorModeValue('black', 'white');

	const onLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	const toggleMenu = () => {
		setMenu(prev => !prev);
		if (menu) {
			document.body.style.overflow = '';
		} else {
			document.body.style.overflow = 'hidden';
		}
	};

	return (
		<Box w={'full'} zIndex={999} h={'10vh'}>
			<Container maxW={'container.lg'}>
				<Flex align={'center'} justify={'space-between'} h={'10vh'}>
					<HStack>
						<IconButton
							aria-label='menu'
							icon={<BiMenuAltLeft fontSize={25} />}
							variant={'solid'}
							display={{ base: 'flex', md: 'none' }}
							onClick={toggleMenu}
						/>
						<Link href={'/'}>{colorMode === 'light' ? <DarkLogo /> : <LightLogo />}</Link>
					</HStack>
					<HStack gap={{ base: 0, md: 5 }}>
						{navigation[1].links.map(nav => (
							<Link href={nav.route}>
								<Box
									display={{ base: 'none', md: 'flex' }}
									color={'facebook.300'}
									_hover={{ textDecoration: 'underline', color: linkHover }}
									as='a'
								>
									{t(nav.label, { ns: 'layout' })}
								</Box>
							</Link>
						))}
						<Menu placement='bottom'>
							<MenuButton
								as={Button}
								rightIcon={<TbWorld />}
								textTransform={'capitalize'}
								colorScheme={'facebook'}
								variant={'ghost'}
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
							aria-label='color-mode'
							onClick={toggleColorMode}
							icon={colorMode == 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
							colorScheme={'facebook'}
							variant={'outline'}
						/>
					</HStack>
				</Flex>
			</Container>
			<Box
				zIndex={1001}
				w={'full'}
				h={'10vh'}
				px={10}
				borderBottom={'1px'}
				pos={'fixed'}
				top={menu ? '10vh' : '-20vh'}
				transition={'all .5s ease'}
				left={0}
				right={0}
				bg={useColorModeValue('gray.50', 'gray.900')}
				color={useColorModeValue('gray.700', 'gray.200')}
				borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
			>
				<HStack justify={'center'} align={'center'} h={'100%'} gap={5}>
					{navigation[1].links.map(nav => (
						<Link href={nav.route}>
							<Box
								color={'facebook.300'}
								_hover={{ textDecoration: 'underline', color: linkHover }}
								as='a'
							>
								{t(nav.label, { ns: 'layout' })}
							</Box>
						</Link>
					))}
				</HStack>
			</Box>
		</Box>
	);
};

export default AuthNavbarComponent;
