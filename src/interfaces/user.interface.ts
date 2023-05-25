import { RoleUser } from './constants.interface';

export interface UserType {
	email?: string;
	fullName?: string;
	role?: RoleUser;
	createdAt?: Date;
	password?: string;
	avatar?: string;
	job?: string;
	courses: string[];
}
