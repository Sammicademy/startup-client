import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { LoginProps } from './login.props';

const Login = ({ onNavigateStateComponent }: LoginProps) => {
	const [show, setShow] = useState<boolean>(false);

	const { t } = useTranslation();

	const toggleShow = () => setShow(prev => !prev);

	return (
		<Stack spacing={4}>
			<Heading
				color={useColorModeValue('gray.900', 'gray.200')}
				lineHeight={1.1}
				fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
			>
				{t('login_title', { ns: 'global' })}
				<Text as={'span'} bgGradient='linear(to-r, gray.400,facebook.400)' bgClip='text'>
					!
				</Text>
			</Heading>
			<Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
				{t('login_description', { ns: 'global' })}
			</Text>
			<FormControl isRequired>
				<FormLabel>{t('login_input_email_label', { ns: 'global' })}</FormLabel>
				<Input focusBorderColor='facebook.500' type='text' placeholder={'info@sammi.ac'} h={14} />
			</FormControl>
			<FormControl isRequired>
				<FormLabel>{t('login_input_password_label', { ns: 'global' })}</FormLabel>
				<InputGroup>
					<Input focusBorderColor='facebook.500' type={!show ? 'password' : 'text'} placeholder={'****'} h={14} />
					<InputRightElement pt={4}>
						<Icon as={!show ? AiOutlineEye : AiOutlineEyeInvisible} cursor={'pointer'} onClick={toggleShow} />
					</InputRightElement>
				</InputGroup>
			</FormControl>
			<HStack justify={'space-between'}>
				<Checkbox colorScheme={'facebook'}>{t('auth_remember_me', { ns: 'global' })}</Checkbox>
				<Link href={'/account-recovery'}>
					<Box as={'a'} color={'teal.500'} _hover={{ textDecoration: 'underline' }}>
						{t('auth_forgot_password', { ns: 'global' })}
					</Box>
				</Link>
			</HStack>
			<Button
				w={'full'}
				bgGradient='linear(to-r, facebook.400,gray.400)'
				color={'white'}
				_hover={{ bgGradient: 'linear(to-r, facebook.500,gray.500)', boxShadow: 'xl' }}
				h={14}
			>
				{t('login_btn', { ns: 'global' })}
			</Button>
			<Text>
				{t('login_not_account_yet', { ns: 'global' })}{' '}
				<Box
					as={'span'}
					onClick={() => onNavigateStateComponent('register')}
					color={'teal.500'}
					cursor={'pointer'}
					_hover={{ textDecoration: 'underline' }}
				>
					{t('login_redirect_to_register', { ns: 'global' })}
				</Box>
			</Text>
		</Stack>
	);
};
export default Login;
