import { CourseType } from 'src/interfaces/course.interface';
import { InstructorType } from 'src/interfaces/instructor.interface';
import { UserType } from 'src/interfaces/user.interface';

export interface AdminIntialStateType {
	isLoading: boolean;
	error: string | null | unknown;
	courses: CourseType[];
	instructors: InstructorType[];
	users: UserType[];
}

export interface ApproveAndDeleteBodyResponse {
	instructorId: string;
	callback: () => void;
}

export interface AdminUserInterfaceResponse {
	limit: string;
	token?: string;
}

export interface AdminSearchUsersResponse {
	query: string;
	limit: string;
}
