export interface CourseType {
	slug: string;
	previewImage: string;
	title: string;
	lessonCount: number;
	totalHour: number;
	level: string;
	price: number;
	reviewAvg: number;
	reviewCount: number;
	author: AuthorType;
	tags: string[];
	requirements: string[];
	learn: string[];
	exerpt: string;
	description: string;
	category: string;
	_id: string;
	language: string;
	isActive: boolean;
	updatedAt: Date;
	allStudents: number;
}
export interface AuthorType {
	fullName: string;
	avatar: string;
	job: string;
}

export interface ReviewType {
	author: AuthorType;
	createdAt: Date;
	updatedAt: Date;
	rating: number;
	summary: string;
}
