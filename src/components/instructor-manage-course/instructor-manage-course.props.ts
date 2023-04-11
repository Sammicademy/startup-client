import { CourseType } from 'src/interfaces/course.interface';

export interface InstructorManageCourseProps {
	titleBtn: string;
	submitHandler: (data: CourseType) => void;
	courseValues?: CourseType | null;
}

export interface SubmitValuesInterface {
	title: string;
	exerpt: string;
	learn: string[];
	requirements: string[];
	description: string;
	level: string;
	category: string;
	price: string;
	tags: string[];
	previewImage: string;
}
