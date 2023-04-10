import { Divider, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { InstructorManageCourse } from 'src/components';
import { SubmitValuesInterface } from 'src/components/instructor-manage-course/instructor-manage-course.props';
import SectionTitle from 'src/components/section-title/section-title';
import { useActions } from 'src/hooks/useActions';

const CreateCourseComponent = () => {
	const { createCourse } = useActions();
	const toast = useToast();
	const router = useRouter();

	const onSubmit = (data: SubmitValuesInterface) => {
		createCourse({
			...data,
			callback: () => {
				toast({
					title: 'Successfully created',
					description: 'You can customize your curriculum for your course',
					position: 'top-right',
					isClosable: true,
				});
				router.push('/instructor/courses');
			},
		});
	};

	return (
		<>
			<SectionTitle
				title='Create course'
				subtitle="Note that when you're creating course it will be draft"
			/>
			<Divider mt={5} />
			<InstructorManageCourse titleBtn='Create course' submitHandler={onSubmit} />
		</>
	);
};

export default CreateCourseComponent;
