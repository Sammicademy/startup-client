import { Button, useToast } from '@chakra-ui/react';
import { Form, Formik, FormikValues } from 'formik';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { CourseValidation } from 'src/validations/course.validation';
import ErrorAlert from '../error-alert/error-alert';
import TextFiled from '../text-filed/text-filed';
import { SectionFormProps } from './section-form.props';

const SectionForm = ({ onClose, values }: SectionFormProps) => {
	const [initialValues, setInitialValues] = useState<{ title: string }>({ title: '' });

	const { createSection, clearSectionError, editSection } = useActions();
	const { error, isLoading } = useTypedSelector(state => state.section);
	const { course } = useTypedSelector(state => state.instructor);
	const { t } = useTranslation();
	const toast = useToast();

	const onSubmit = (formValues: FormikValues) => {
		if (values) {
			editSection({
				sectionId: values.id,
				title: formValues.title,
				callback: () => {
					toast({
						title: t('successfully_edited', { ns: 'instructor' }),
						position: 'top-right',
						isClosable: true,
					});
					onClose();
				},
			});
		} else {
			createSection({
				title: formValues.title,
				courseId: course?._id as string,
				callback: () => {
					toast({
						title: t('successfully_created_course', { ns: 'instructor' }),
						position: 'top-right',
						isClosable: true,
					});
					onClose();
				},
			});
		}
	};

	useEffect(() => {
		setInitialValues({ title: values?.title as string });
	}, [values]);

	return (
		<Formik
			onSubmit={onSubmit}
			initialValues={initialValues}
			validationSchema={CourseValidation.section}
			enableReinitialize
		>
			<Form>
				<>{error && <ErrorAlert title={error as string} clearHandler={clearSectionError} />}</>
				<TextFiled name='title' label={t('title', { ns: 'instructor' })} />
				<Button
					h={14}
					mt={4}
					w={'full'}
					colorScheme={'facebook'}
					type={'submit'}
					isLoading={isLoading}
					loadingText={`${t('loading', { ns: 'global' })}`}
				>
					{t('search_input_btn', { ns: 'courses' })}
				</Button>
			</Form>
		</Formik>
	);
};

export default SectionForm;
