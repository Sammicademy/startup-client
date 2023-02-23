import {
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
import { DarkLogo, EngIcons, LightLogo, RusIcons, UzbIcons } from 'src/icons';
import { BsFillMoonFill, BsFillSunFill, BsTranslate } from 'react-icons/bs';
import { MdOutlineContactSupport } from 'react-icons/md';
import { BiMenuAltLeft, BiUserCircle } from 'react-icons/bi';
import Link from 'next/link';
import { HeaderProps } from './header.props';

const Header = ({ onToggle }: HeaderProps) => {
	const { toggleColorMode, colorMode } = useColorMode();

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
					<Icon as={BiMenuAltLeft} onClick={onToggle} w={6} h={6} cursor={'pointer'} />
					<Link href={'/'}>{colorMode === 'light' ? <DarkLogo /> : <LightLogo />}</Link>
				</HStack>
				<HStack>
					<IconButton aria-label='support' icon={<MdOutlineContactSupport />} colorScheme={'facebook'} variant={'ghost'} />
					<Menu>
						<MenuButton as={IconButton} icon={<BsTranslate />} colorScheme={'facebook'} variant={'solid'} />
						<MenuList>
							<MenuItem icon={<UzbIcons />}>UZB</MenuItem>
							<MenuItem icon={<RusIcons />}>RUS</MenuItem>
							<MenuItem icon={<EngIcons />}>ENG</MenuItem>
						</MenuList>
					</Menu>
					<IconButton
						aria-label='color-mode'
						onClick={toggleColorMode}
						icon={colorMode == 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
						colorScheme={'facebook'}
						variant={'outline'}
					/>
					<Button rightIcon={<BiUserCircle />} colorScheme={'facebook'}>
						LOGIN
					</Button>
				</HStack>
			</Flex>
		</Box>
	);
};

export default Header;
