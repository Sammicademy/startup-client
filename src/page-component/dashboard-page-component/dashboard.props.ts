import { ReactNode } from 'react';
import { CardType } from 'src/interfaces/constants.interface';
import { CourseType } from 'src/interfaces/course.interface';
import { TransactionsType } from 'src/interfaces/user.interface';

export interface StatsCardProps {
	title: string;
	stat: string;
	icon: ReactNode;
}

export interface TransactionsProps {
	transactions: TransactionsType[];
}

export interface MyCoursesProps {
	myCourses: CourseType[];
}

export interface SavedCardsProps {
	savedCards: CardType[];
}
