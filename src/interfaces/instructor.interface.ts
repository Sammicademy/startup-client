export interface InstructorType {
	fullName: string;
	avatar: string;
	totalCourses: number;
	studentsCount: number;
	job: string;
}

export interface SectionType {
	_id: string;
	title: string;
	lessons: LessonType[];
}

export interface LessonType {
	name: string;
	material: string;
	embedVideo: string;
	hour: number;
	minute: number;
	second: number;
	_id: string;
}
