import {
	Avatar,
	Badge,
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import {
	AiOutlineDashboard,
	AiOutlineLogin,
	AiOutlineShoppingCart,
} from 'react-icons/ai';
import { BiMenuAltLeft, BiUserCircle } from 'react-icons/bi';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { IoIosLogOut } from 'react-icons/io';
import { RiAdminFill } from 'react-icons/ri';
import { TbWorld } from 'react-icons/tb';
import { language } from 'src/config/constants';
import { useActions } from 'src/hooks/useActions';
import { useAuth } from 'src/hooks/useAuth';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { DarkLogo, LightLogo } from 'src/icons';
import { HeaderProps } from './header.props';

const Header = ({ onToggle }: HeaderProps) => {
	const { toggleColorMode, colorMode } = useColorMode();
	const { i18n, t } = useTranslation();
	const router = useRouter();
	const { user } = useAuth();
	const { logout } = useActions();
	const { courses, books } = useTypedSelector(state => state.cart);

	const onLanguage = (lng: string) => {
		router.replace(router.asPath);
		i18n.changeLanguage(lng);
	};

	const logoutHandler = () => {
		logout();
		router.push('/auth');
	};

	return (
		<Box
			zIndex={1001}
			w={'full'}
			h={'10vh'}
			px={10}
			borderBottom={'1px'}
			pos={'fixed'}
			top={0}
			left={0}
			right={0}
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
		>
			<Flex h={'full'} justify={'space-between'} align={'center'}>
				<HStack>
					<Icon
						as={BiMenuAltLeft}
						onClick={onToggle}
						w={6}
						h={6}
						cursor={'pointer'}
					/>
					<Link href={'/'}>
						{colorMode === 'light' ? <DarkLogo /> : <LightLogo />}
					</Link>
				</HStack>
				<HStack>
					<Box pos={'relative'}>
						<IconButton
							aria-label='cart'
							onClick={() => router.push('/shop/cart')}
							icon={<AiOutlineShoppingCart />}
							colorScheme={'facebook'}
							variant={'solid'}
						/>
						{[...courses, ...books].length ? (
							<Badge
								pos={'absolute'}
								backgroundColor={'green.500'}
								top={-2}
								left={-3}
								colorScheme={'green'}
								px={2}
								py={1}
							>
								{[...courses, ...books].length}
							</Badge>
						) : null}
					</Box>
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
									backgroundColor={
										i18n.resolvedLanguage === item.lng
											? 'facebook.500'
											: ''
									}
								>
									{item.nativeLng}
								</MenuItem>
							))}
						</MenuList>
					</Menu>
					<IconButton
						aria-label='color-mode'
						onClick={toggleColorMode}
						icon={
							colorMode == 'light' ? (
								<BsFillMoonFill />
							) : (
								<BsFillSunFill />
							)
						}
						colorScheme={'facebook'}
						variant={'outline'}
					/>
					{user ? (
						<Menu>
							<MenuButton
								as={Button}
								rounded={'full'}
								variant={'link'}
								cursor={'pointer'}
								minW={0}
							>
								<Avatar
									backgroundColor={'facebook.500'}
									src={user.avatar}
								/>
							</MenuButton>
							<MenuList p={0} m={0}>
								{user.role === 'INSTRUCTOR' && (
									<MenuItem
										h={14}
										onClick={() => router.push('/instructor')}
										fontWeight={'bold'}
										icon={<RiAdminFill fontSize={17} />}
									>
										{t('instructor_admin', { ns: 'instructor' })}
									</MenuItem>
								)}
								<MenuItem
									h={14}
									onClick={() => router.push('/dashboard')}
									fontWeight={'bold'}
									icon={<AiOutlineDashboard fontSize={17} />}
								>
									Dashboard
								</MenuItem>

								<MenuItem
									h={14}
									onClick={logoutHandler}
									fontWeight={'bold'}
									icon={<IoIosLogOut fontSize={17} />}
								>
									{t('logout', { ns: 'global' })}
								</MenuItem>
							</MenuList>
						</Menu>
					) : (
						<>
							<Button
								display={{ base: 'none', md: 'flex' }}
								rightIcon={<BiUserCircle />}
								onClick={() => router.push('/auth')}
								colorScheme={'facebook'}
							>
								{t('login', { ns: 'layout' })}
							</Button>
							<IconButton
								display={{ base: 'flex', md: 'none' }}
								aria-label='login'
								onClick={() => router.push('/auth')}
								icon={<AiOutlineLogin />}
								colorScheme={'facebook'}
								variant={'outline'}
							/>
						</>
					)}
				</HStack>
			</Flex>
		</Box>
	);
};

export default Header;
