export interface LessonInitialStateType {
	isLoading: boolean;
	error: string | null | unknown;
}

export interface LessonBodyType {
	callback: () => void;
	courseId?: string;
	sectionId?: string;
	lessonId?: string;
}
