import {
	Box,
	Button,
	IconButton,
	Stack,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaRegCommentDots, FaTelegram } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { HiHeart } from 'react-icons/hi';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { DarkLogo, LightLogo } from 'src/icons';

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { course } = useTypedSelector(state => state.course);
	const router = useRouter();

	return (
		<Box
			position={'fixed'}
			top={0}
			left={0}
			zIndex={99}
			right={0}
			h={'10vh'}
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
		>
			<Stack
				h={'10vh'}
				w={'90%'}
				mx={'auto'}
				direction={'row'}
				align={'center'}
				justify={'space-between'}
			>
				<Stack gap={{ base: 0, md: 2 }} direction={'row'}>
					<Link href='/'>
						{colorMode === 'light' ? <DarkLogo /> : <LightLogo />}
					</Link>
				</Stack>

				<Stack direction={'row'} align={'center'}>
					<IconButton
						colorScheme={'green'}
						variant={'ghost'}
						onClick={toggleColorMode}
						icon={
							colorMode == 'light' ? (
								<BsFillMoonStarsFill />
							) : (
								<FiSun />
							)
						}
						aria-label={'moon'}
					/>
					<IconButton
						icon={<FaTelegram />}
						onClick={() =>
							window.open('https://t.me/sammi_community')
						}
						aria-label={'comments'}
						variant={'ghost'}
						colorScheme={'telegram'}
						display={{ base: 'none', md: 'flex' }}
					/>
					<IconButton
						// onClick={onOpen}
						icon={<FaRegCommentDots />}
						aria-label={'comments'}
						variant={'outline'}
						colorScheme={'green'}
						display={{ base: 'none', md: 'flex' }}
					/>
					<Button
						leftIcon={<HiHeart color='red' />}
						onClick={() =>
							window.open('https://t.me/samarbadriddinov/661')
						}
						colorScheme={'green'}
						display={{ base: 'none', md: 'flex' }}
					>
						Sponsor
					</Button>
					<IconButton
						onClick={() => router.push(`/course/${course?.slug}`)}
						icon={<RiLogoutBoxLine />}
						aria-label={'comments'}
						variant={'outline'}
						colorScheme={'red'}
					/>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Header;
