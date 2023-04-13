import { Box, Button, Flex, Stack, Text, useColorModeValue, useToast } from '@chakra-ui/react';
import { Form, Formik, FormikValues } from 'formik';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'react-quill/dist/quill.snow.css';
import { editLessonModules } from 'src/config/editor.config';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { LessonType } from 'src/interfaces/instructor.interface';
import { CourseValidation, manageLessonValues } from 'src/validations/course.validation';
import ErrorAlert from '../error-alert/error-alert';
import TextAreaField from '../text-area-field/text-area-field';
import TextFiled from '../text-filed/text-filed';
import { LessonFormProps } from './lesson-form.props';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const LessonForm = ({ sectionId, values }: LessonFormProps) => {
	const [initialValues, setInitialValues] = useState(manageLessonValues);
	const { createLesson, getSection, clearlessonError, editLesson } = useActions();
	const { course } = useTypedSelector(state => state.instructor);
	const { isLoading, error } = useTypedSelector(state => state.lesson);
	const { t } = useTranslation();
	const toast = useToast();

	const onSubmit = (formValues: FormikValues) => {
		const data = formValues as LessonType;
		if (values) {
			editLesson({
				lessonId: values._id,
				...data,
				callback: () => {
					toast({
						title: 'Successfully edited lesson',
						position: 'top-right',
						isClosable: true,
					});
					getSection({ courseId: course?._id, callback: () => {} });
				},
			});
		} else {
			createLesson({
				...data,
				sectionId,
				callback: () => {
					toast({
						title: 'Successfully created new lesson',
						position: 'top-right',
						isClosable: true,
					});
					getSection({ courseId: course?._id, callback: () => {} });
				},
			});
		}
	};

	useEffect(() => {
		if (values?._id) {
			setInitialValues(values);
		}
	}, [values]);

	return (
		<Box
			p={5}
			mt='4'
			border={'1px'}
			borderRadius={'lg'}
			borderColor={useColorModeValue('gray.200', 'gray.500')}
		>
			<Formik
				onSubmit={onSubmit}
				initialValues={initialValues}
				validationSchema={CourseValidation.lesson}
				enableReinitialize
			>
				{formik => (
					<Form>
						<Stack spacing={5}>
							<>{error && <ErrorAlert title={error as string} clearHandler={clearlessonError} />}</>
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
									value={formik.values?.material}
								/>
								{formik.errors.material && formik.touched.material && (
									<Text mt={2} fontSize='14px' color='red.500'>
										{formik.errors.material as string}
									</Text>
								)}
							</Box>
							<Button
								h={14}
								mt={4}
								w={'full'}
								colorScheme={'facebook'}
								type={'submit'}
								isLoading={isLoading}
								loadingText={`${t('loading', { ns: 'global' })}`}
							>
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
