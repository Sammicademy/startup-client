export enum Language {
	EN = 'en',
	RU = 'ru',
	UZ = 'uz',
	TR = 'tr',
}

export type RoleUser = 'ADMIN' | 'INSTRUCTOR' | 'USER';

export interface CardType {
	id: string;
	billing_details: {
		address: {
			city: string;
			country: string;
			line1: string;
			line2: string;
			postal_code: string;
			state: string;
		};
		name: string;
	};
	card: {
		brand: string;
		exp_month: number;
		exp_year: number;
		last4: string;
	};
}
