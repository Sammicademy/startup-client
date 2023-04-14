import { LessonType } from 'src/interfaces/instructor.interface';

export interface LessonAccordionItemProps {
	lesson: LessonType;
	sectionId: string;
	lessonIdx: number;
}
