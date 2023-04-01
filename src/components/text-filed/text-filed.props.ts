import { InputProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface TextFieldProps extends InputProps {
	label: string;
	placeholder?: string;
	children?: ReactNode;
	type?: string;
}
