import { FormControl, FormErrorMessage, FormLabel, Textarea } from '@chakra-ui/react';
import { FieldHookConfig, useField } from 'formik';
import { useTranslation } from 'react-i18next';
import { TextAreaFieldProps } from './text-area-field.props';

const TextAreaField = ({
	label,
	placeholder,
	height,
	resize,
	...props
}: TextAreaFieldProps & FieldHookConfig<string>) => {
	const [field, meta] = useField(props);
	const { t } = useTranslation();

	return (
		<FormControl mt='15' isRequired isInvalid={!!meta.touched && !!meta.error}>
			<FormLabel>{label}</FormLabel>
			<Textarea
				placeholder={placeholder}
				focusBorderColor='facebook.500'
				height={height}
				resize={resize}
				{...field}
			/>
			<FormErrorMessage>{t(`${meta.error}`, { ns: 'global' })}</FormErrorMessage>
		</FormControl>
	);
};
export default TextAreaField;
