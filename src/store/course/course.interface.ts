import { SubmitValuesInterface } from 'src/components/instructor-manage-course/instructor-manage-course.props';

export interface CourseIntialStateType {
	isLoading: boolean;
	error: string | null | unknown;
}

export interface CourseCreateBodyInterface extends SubmitValuesInterface {
	callback: () => void;
}
