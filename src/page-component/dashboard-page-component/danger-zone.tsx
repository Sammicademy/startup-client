import { Box, Button, Divider, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import TextFiled from 'src/components/text-filed/text-filed';

const DangerZone = () => {
	const onSubmit = () => {};

	return (
		<>
			<Text fontSize={'2xl'}>Change password</Text>
			<Divider my={5} />
			<Box maxW={'70%'}>
				<Formik onSubmit={onSubmit} initialValues={{}}>
					<Form>
						<TextFiled
							name='old-password'
							label='Old password'
							placeholder='****'
						/>
						<TextFiled
							name='password'
							label='Password'
							placeholder='****'
						/>
						<TextFiled
							name='confirm-password'
							label='Confirm Password'
							placeholder='****'
						/>
						<Button h={14} w={'full'} mt={5} colorScheme={'facebook'}>
							Submit
						</Button>
					</Form>
				</Formik>
			</Box>
		</>
	);
};

export default DangerZone;
