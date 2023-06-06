import {
	Box,
	Button,
	Divider,
	Icon,
	InputRightElement,
	Text,
	useToast,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import TextFiled from 'src/components/text-filed/text-filed';
import { useActions } from 'src/hooks/useActions';
import { useShowPassword } from 'src/hooks/useShowPassword';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { AuthValidation } from 'src/validations/auth.validation';

const DangerZone = () => {
	const { editProfilePassword } = useActions();
	const { user } = useTypedSelector(state => state.user);
	const toast = useToast();
	const { t } = useTranslation();
	const { show, toggleShow, showConfirm, toggleShowConfirm } =
		useShowPassword();

	const onSubmit = (formData: { password: string }) => {
		editProfilePassword({
			email: user?.email as string,
			password: formData.password,
			callback: () => {
				toast({
					title: `${t('successfully_edited', { ns: 'global' })}`,
					description: `${t('login_with_new_password', {
						ns: 'global',
					})}`,
					status: 'success',
					position: 'top-right',
					isClosable: true,
				});
			},
		});
	};

	return (
		<>
			<Text fontSize={'2xl'}>Change password</Text>
			<Divider my={5} />
			<Box maxW={'70%'}>
				<Formik
					onSubmit={onSubmit}
					initialValues={{ password: '', confirmPassword: '' }}
					validationSchema={AuthValidation.editPassword}
				>
					<Form>
						<TextFiled
							name='password'
							label={t('account_recovery_title_form3', {
								ns: 'global',
							})}
							type={!show ? 'password' : 'text'}
							placeholder={'****'}
						>
							<InputRightElement pt={4}>
								<Icon
									as={!show ? AiOutlineEye : AiOutlineEyeInvisible}
									cursor={'pointer'}
									onClick={toggleShow}
								/>
							</InputRightElement>
						</TextFiled>
						<TextFiled
							name='confirmPassword'
							label={t('register_input_confirm_password_label', {
								ns: 'global',
							})}
							type={!showConfirm ? 'password' : 'text'}
							placeholder={'****'}
						>
							<InputRightElement pt={4}>
								<Icon
									as={
										!showConfirm
											? AiOutlineEye
											: AiOutlineEyeInvisible
									}
									cursor={'pointer'}
									onClick={toggleShowConfirm}
								/>
							</InputRightElement>
						</TextFiled>
						<Button
							w={'full'}
							bgGradient='linear(to-r, facebook.400,gray.400)'
							color={'white'}
							_hover={{
								bgGradient: 'linear(to-r, facebook.500,gray.500)',
								boxShadow: 'xl',
							}}
							h={14}
							mt={4}
							type={'submit'}
							loadingText={`${t('loading', { ns: 'global' })}`}
						>
							{t('account_recovery_btn_form3', { ns: 'global' })}
						</Button>
					</Form>
				</Formik>
			</Box>
		</>
	);
};

export default DangerZone;
