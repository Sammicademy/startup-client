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

export interface TransactionsType {
	amount: number;
	created: number;
	id: string;
	payment_method_details: {
		card: {
			brand: string;
			exp_month: number;
			exp_year: number;
			last4: number;
		};
	};
}
