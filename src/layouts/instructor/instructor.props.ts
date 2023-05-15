import { CourseType } from 'src/interfaces/course.interface';
import { BalanceType } from 'src/interfaces/instructor.interface';

export interface InstructorProvideProps {
	courses: CourseType[];
	course: CourseType;
	balance: BalanceType;
}
