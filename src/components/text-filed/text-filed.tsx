import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup } from '@chakra-ui/react';
import { FieldHookConfig, useField } from 'formik';
import { useTranslation } from 'react-i18next';
import { TextFieldProps } from './text-filed.props';

const TextFiled = ({
	label,
	placeholder,
	type,
	children,
	disabled,
	...props
}: TextFieldProps & FieldHookConfig<string>) => {
	const [field, meta] = useField(props);
	const { t } = useTranslation();

	return (
		<FormControl mt={15} isRequired isInvalid={!!meta.touched && !!meta.error}>
			<FormLabel>{label}</FormLabel>
			<InputGroup>
				<Input
					focusBorderColor='facebook.500'
					placeholder={placeholder}
					h={14}
					type={type}
					disabled={disabled}
					{...field}
				/>
				{children}
			</InputGroup>
			<FormErrorMessage>{t(`${meta.error}`, { ns: 'global' })}</FormErrorMessage>
		</FormControl>
	);
};

export default TextFiled;
