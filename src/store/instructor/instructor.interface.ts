import { CourseType } from 'src/interfaces/course.interface';

export interface InstructorIntialStateType {
	isLoading: boolean;
	error: string | null | unknown;
	courses: CourseType[];
	course: CourseType | null;
}

export interface InstructorApplyBody {
	firstName: string;
	lastName: string;
	email: string;
	socialMedia: string;
	callback: () => void;
}
