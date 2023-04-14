import { SectionType } from 'src/interfaces/instructor.interface';

export interface SectionInitialStateType {
	isLoading: boolean;
	pendingSection: boolean;
	error: string | null | unknown;
	sections: SectionType[];
}

export interface SectionBodyType {
	title?: string;
	courseId?: string;
	sectionId?: string;
	sections?: string[];
	lessons?: string[];
	callback: () => void;
}
