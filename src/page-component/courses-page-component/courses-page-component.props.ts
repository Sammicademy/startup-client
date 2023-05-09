export interface FilterItemProps {
	title: string;
	id: string;
	categoryList: CategoryListProps[];
}

export interface CategoryListProps {
	name: string;
	id: string;
}

export interface FilterCourseType {
	category: string;
	id: string;
}
