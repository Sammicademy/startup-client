import { CourseType } from 'src/interfaces/course.interface';

export interface DraftCourseCardProps {
	item: CourseType;
	status: 'Active' | 'Draft';
}
