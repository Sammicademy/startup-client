import * as Yup from 'yup';

export const AuthValidation = {
	register() {
		return Yup.object({
			email: Yup.string().email('email_is_invalid').required('email_is_required'),
			password: Yup.string().min(6, 'password_shouldbe_min_6').required('password_is_required'),
			confirmPassword: Yup.string()
				.oneOf([Yup.ref('password')], "password_didn't_match")
				.required('confirm_password_is_required'),
		});
	},
	login() {
		return Yup.object({
			email: Yup.string().email('email_is_invalid').required('email_is_required'),
			password: Yup.string().min(6, 'password_shouldbe_min_6').required('password_is_required'),
		});
	},
	otp() {
		return Yup.object({
			otp: Yup.string().required('otp_is_required').min(6, 'verification_code_shouldbe_6'),
		});
	},
	onlyEmail() {
		return Yup.object({
			email: Yup.string().email('email_is_invalid').required('email_is_required'),
		});
	},
	editPassword() {
		return Yup.object({
			password: Yup.string().min(6, 'password_shouldbe_min_6').required('password_is_required'),
			confirmPassword: Yup.string()
				.oneOf([Yup.ref('password')], "password_didn't_match")
				.required('confirm_password_is_required'),
		});
	},
};
