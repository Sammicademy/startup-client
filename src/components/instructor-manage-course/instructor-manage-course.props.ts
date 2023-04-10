export interface InstructorManageCourseProps {
	titleBtn: string;
	submitHandler: (data: SubmitValuesInterface) => void;
}

export interface SubmitValuesInterface {
	title: string;
	exerpt: string;
	learn: string[];
	requirements: string[];
	description: string;
	level: string;
	category: string;
	price: string;
	tags: string[];
	previewImage: string;
}
