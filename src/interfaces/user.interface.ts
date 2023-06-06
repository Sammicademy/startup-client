import { RoleUser } from './constants.interface';

export interface UserType {
	id: string;
	email?: string;
	fullName?: string;
	role?: RoleUser;
	createdAt?: Date;
	password?: string;
	avatar?: string;
	job?: string;
	birthday: string;
	bio: string;
	courses: string[];
}
