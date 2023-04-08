import { FormikProps } from 'formik';

export interface TagFieldProps {
	label: string;
	name: string;
	placeholder: string;
	formik: FormikProps<any>;
	errorMessage: string;
}
