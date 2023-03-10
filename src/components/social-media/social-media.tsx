import { Box, Button, Center, HStack, Text } from '@chakra-ui/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialMedia = () => {
	return (
		<>
			<Box
				pos={'relative'}
				_before={{
					content: '""',
					position: 'absolute',
					width: '45%',
					left: 0,
					top: '50%',
					transform: 'translateY(-50%)',
					height: '1px',
					bg: 'gray.600',
				}}
				_after={{
					content: '""',
					position: 'absolute',
					width: '45%',
					right: 0,
					top: '50%',
					transform: 'translateY(-50%)',
					height: '1px',
					bg: 'gray.600',
				}}
				textAlign={'center'}
			>
				OR
			</Box>
			<HStack>
				<Button w={'full'} colorScheme={'gray'} leftIcon={<FaGithub />}>
					<Center>
						<Text>Continue with Github</Text>
					</Center>
				</Button>

				<Button w={'full'} colorScheme={'red'} variant={'outline'} leftIcon={<FaGoogle />}>
					<Center>
						<Text>Sign in with Google</Text>
					</Center>
				</Button>
			</HStack>
		</>
	);
};

export default SocialMedia;
