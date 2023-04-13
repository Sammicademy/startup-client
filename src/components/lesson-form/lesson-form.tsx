import { Box, Button, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { Form, Formik, FormikValues } from 'formik';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { editLessonModules } from 'src/config/editor.config';
import TextAreaField from '../text-area-field/text-area-field';
import TextFiled from '../text-filed/text-filed';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const LessonForm = () => {
	const onSubmit = (formValues: FormikValues) => {
		console.log(formValues);
	};

	return (
		<Box
			p={5}
			mt='4'
			border={'1px'}
			borderRadius={'lg'}
			borderColor={useColorModeValue('gray.200', 'gray.500')}
		>
			<Formik onSubmit={onSubmit} initialValues={{ material: '' }}>
				{formik => (
					<Form>
						<Stack spacing={5}>
							<TextFiled name='name' label='Name' />
							<TextAreaField name='embedVideo' label='Embed video' />
							<Flex gap={3}>
								<TextFiled name='hour' label='Hour' type='number' />
								<TextFiled name='minute' label='Minute' type='number' />
								<TextFiled name='second' label='Second' type='number' />
							</Flex>
							<Box>
								<ReactQuill
									modules={editLessonModules}
									onChange={data => formik.setFieldValue('material', data)}
									value={formik.values.material}
								/>
								{formik.errors.material && formik.touched.material && (
									<Text mt={2} fontSize='14px' color='red.500'>
										{formik.errors.material as string}
									</Text>
								)}
							</Box>
							<Button h={14} mt={4} w={'full'} colorScheme={'facebook'} type={'submit'}>
								Submit
							</Button>
						</Stack>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default LessonForm;
