import { ReviewType } from 'src/interfaces/course.interface';

export interface ReviewProps {
	reviews: ReviewType[];
	isLoading: boolean;
}
