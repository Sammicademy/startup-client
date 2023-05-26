import { LessonType } from 'src/interfaces/instructor.interface';

export interface LessonInitialStateType {
	isLoading: boolean;
	lesson: LessonType;
	error: string | null | unknown;
}

export interface LessonBodyType {
	callback: () => void;
	courseId?: string;
	sectionId?: string;
	lessonId?: string;
}
