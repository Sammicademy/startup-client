import { InstructorType } from 'src/interfaces/instructor.interface';

export interface AdminInstructorTableProps {
	instructors: InstructorType[];
	approved: boolean;
}
