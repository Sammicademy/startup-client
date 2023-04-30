import { RoleUser } from './constants.interface';

export interface UserType {
	email?: string;
	fullName?: string;
	role?: RoleUser;
	createdAt?: string;
	password?: string;
	avatar?: string;
	job?: string;
}
