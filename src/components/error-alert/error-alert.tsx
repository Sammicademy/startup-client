import { Alert, AlertIcon, AlertTitle, Icon } from '@chakra-ui/react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { ErrorAlertProps } from './error-alert.props';

const ErrorAlert = ({ title, clearHandler }: ErrorAlertProps) => {
	return (
		<Alert status='error' pos={'relative'}>
			<AlertIcon />
			<AlertTitle>{title}</AlertTitle>
			<Icon
				onClick={clearHandler}
				pos={'absolute'}
				right={2}
				top={2}
				as={AiFillCloseCircle}
				cursor={'pointer'}
				w={5}
				h={5}
			/>
		</Alert>
	);
};

export default ErrorAlert;
