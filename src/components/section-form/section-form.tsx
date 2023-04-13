import { Button, useToast } from '@chakra-ui/react';
import { Form, Formik, FormikValues } from 'formik';
import { useTranslation } from 'react-i18next';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import ErrorAlert from '../error-alert/error-alert';
import TextFiled from '../text-filed/text-filed';
import { SectionFormProps } from './section-form.props';

const SectionForm = ({ onClose }: SectionFormProps) => {
	const { createSection, clearSectionError, getSection } = useActions();
	const { error, isLoading } = useTypedSelector(state => state.section);
	const { course } = useTypedSelector(state => state.instructor);
	const { t } = useTranslation();
	const toast = useToast();

	const onSubmit = (formValues: FormikValues) => {
		createSection({
			title: formValues.title,
			courseId: course?._id as string,
			callback: () => {
				toast({ title: 'Successfully created section', position: 'top-right', isClosable: true });
				onClose();
				getSection({
					courseId: course?._id,
					callback: () => {},
				});
			},
		});
	};

	return (
		<Formik onSubmit={onSubmit} initialValues={{ title: '' }}>
			<Form>
				<>{error && <ErrorAlert title={error as string} clearHandler={clearSectionError} />}</>
				<TextFiled name='title' label='Title' />
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
			</Form>
		</Formik>
	);
};

export default SectionForm;
