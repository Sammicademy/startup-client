import {
	Button,
	Center,
	Heading,
	PinInput,
	PinInputField,
	Stack,
	Text,
	useColorModeValue,
	useToast,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { AuthValidation } from 'src/validations/auth.validation';
import ErrorAlert from '../error-alert/error-alert';

const Verification = () => {
	const { t } = useTranslation();
	const { verifyVerificationCode, register } = useActions();
	const { error, isLoading, user } = useTypedSelector(state => state.user);
	const router = useRouter();
	const toast = useToast();

	const onSubmit = async (formData: { otp: string }) => {
		const email = user?.email as string;
		verifyVerificationCode({
			email,
			otpVerification: formData.otp,
			callback: () => {
				register({
					email: user?.email as string,
					password: user?.password as string,
					callback: () => {
						router.push('/');
						toast({ title: 'Successfully logged in', position: 'top-right', isClosable: true });
					},
				});
			},
		});
	};

	return (
		<Stack spacing={4}>
			<Heading
				color={useColorModeValue('gray.900', 'gray.200')}
				lineHeight={1.1}
				fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
			>
				{t('verification_title', { ns: 'global' })}
				<Text as={'span'} bgGradient='linear(to-r, gray.400,facebook.400)' bgClip='text'>
					!
				</Text>
			</Heading>
			<Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
				{t('verification_description', { ns: 'global' })}
			</Text>
			<>{error && <ErrorAlert title={error as string} />}</>
			<Formik onSubmit={onSubmit} initialValues={{ otp: '' }} validationSchema={AuthValidation.otp}>
				{formik => (
					<Form>
						<Center>
							<PinInput
								onChange={val => formik.setFieldValue('otp', val)}
								otp
								size={'lg'}
								colorScheme={'facebook'}
								focusBorderColor={'facebook.500'}
							>
								{new Array(6).fill(1).map((_, idx) => (
									<PinInputField
										borderColor={
											formik.errors.otp && formik.touched.otp ? 'red.500' : 'facebook.500'
										}
										mx={1}
										key={idx}
									/>
								))}
							</PinInput>
						</Center>
						{formik.errors.otp && formik.touched.otp && (
							<Text textAlign='center' mt={2} fontSize='14px' color='red.500'>
								{formik.errors.otp as string}
							</Text>
						)}
						<Button
							mt={4}
							w={'full'}
							bgGradient='linear(to-r, facebook.400,gray.400)'
							color={'white'}
							_hover={{ bgGradient: 'linear(to-r, facebook.500,gray.500)', boxShadow: 'xl' }}
							h={14}
							type={'submit'}
							isLoading={isLoading}
							loadingText={'Loading...'}
						>
							{t('verification_btn', { ns: 'global' })}
						</Button>
					</Form>
				)}
			</Formik>
		</Stack>
	);
};

export default Verification;
