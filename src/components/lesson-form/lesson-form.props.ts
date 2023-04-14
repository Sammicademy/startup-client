import { LessonType } from 'src/interfaces/instructor.interface';

export interface LessonFormProps {
	sectionId?: string;
	values?: LessonType | null;
	onToggle: () => void;
}
