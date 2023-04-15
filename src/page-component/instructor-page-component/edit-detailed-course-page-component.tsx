import { Divider, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { InstructorManageCourse } from 'src/components';
import SectionTitle from 'src/components/section-title/section-title';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { CourseType } from 'src/interfaces/course.interface';

const EditDetailedCoursePageComponent = () => {
	const { course } = useTypedSelector(state => state.instructor);
	const router = useRouter();
	const { editCourse } = useActions();
	const toast = useToast();
	const { t } = useTranslation();

	const onSubmit = (data: CourseType) => {
		editCourse({
			...data,
			callback: () => {
				toast({
					title: t('successfully_edited', { ns: 'instructor' }),
					position: 'top-right',
					isClosable: true,
				});
				router.push('/instructor/edit-courses');
			},
		});
	};

	return (
		<>
			<SectionTitle
				title={`${t('edit_course_title', { ns: 'instructor' })} ${router.query.slug}`}
				subtitle={''}
			/>
			<Divider mt={5} />

			<InstructorManageCourse
				titleBtn={t('edit_course_title', { ns: 'instructor' })}
				submitHandler={onSubmit}
				courseValues={course}
			/>
		</>
	);
};

export default EditDetailedCoursePageComponent;
