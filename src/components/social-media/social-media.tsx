import { Box, Button, Center, HStack, Text } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialMedia = () => {
	const { t } = useTranslation();

	const gogole = () => {
		signIn('google', { callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_DOMAIN}` });
	};

	const github = () => {
		signIn('github', { callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_DOMAIN}` });
	};

	return (
		<>
			<Box
				pos={'relative'}
				_before={{
					content: '""',
					position: 'absolute',
					width: '40%',
					left: 0,
					top: '50%',
					transform: 'translateY(-50%)',
					height: '1px',
					bg: 'gray.600',
				}}
				_after={{
					content: '""',
					position: 'absolute',
					width: '40%',
					right: 0,
					top: '50%',
					transform: 'translateY(-50%)',
					height: '1px',
					bg: 'gray.600',
				}}
				textAlign={'center'}
			>
				{t('or', { ns: 'global' })}
			</Box>
			<HStack>
				<Button onClick={github} w={'full'} colorScheme={'gray'} leftIcon={<FaGithub />}>
					<Center>
						<Text>Github</Text>
					</Center>
				</Button>

				<Button
					onClick={gogole}
					w={'full'}
					colorScheme={'red'}
					variant={'outline'}
					leftIcon={<FaGoogle />}
				>
					<Center>
						<Text>Google</Text>
					</Center>
				</Button>
			</HStack>
		</>
	);
};

export default SocialMedia;
