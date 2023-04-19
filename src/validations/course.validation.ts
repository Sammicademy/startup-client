import * as Yup from 'yup';

interface Type {
	title: string;
	exerpt: string;
	learn: string[];
	requirements: string[];
	description: string;
	level: string;
	category: string;
	price: number;
	tags: string[];
	language: string;
}

export const manageCourseValues: Type = {
	title: '',
	exerpt: '',
	learn: [],
	requirements: [],
	description: '',
	level: '',
	category: '',
	price: 0,
	tags: [],
	language: '',
};

interface LessonTypeValues {
	name: string;
	embedVideo: string;
	hour: number;
	minute: number;
	second: number;
	material: string;
}

export const manageLessonValues: LessonTypeValues = {
	name: '',
	embedVideo: '',
	hour: 0,
	minute: 0,
	second: 0,
	material: '',
};

export const CourseValidation = {
	create() {
		return Yup.object({
			title: Yup.string().min(8, 'title_min_char').required('title_is_required'),
			exerpt: Yup.string().min(15, 'exerpt_min_char').required('exerpt_is_required'),
			learn: Yup.array().min(3).required('level_is_required'),
			requirements: Yup.array().min(5).required('requirements_is_required'),
			tags: Yup.array().min(5).required('course_tags_is_required'),
			description: Yup.string().min(10, 'description_min_char').required('description_is_required'),
			level: Yup.string().required('level_is_required'),
			category: Yup.string().required('category_is_required'),
			price: Yup.string().required('price_is_required'),
			language: Yup.string().required('Language is required'),
		});
	},
	section() {
		return Yup.object({
			title: Yup.string().required('title_is_required'),
		});
	},
	lesson() {
		return Yup.object({
			name: Yup.string().required('name_is_required'),
			embedVideo: Yup.string().required('embed_video_is_required'),
			hour: Yup.number().required('hour_is_required'),
			minute: Yup.number().required('minute_is_required'),
			second: Yup.number().required('second_is_required'),
		});
	},
};
