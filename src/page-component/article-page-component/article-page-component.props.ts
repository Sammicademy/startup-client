import { ArticleType } from 'src/interfaces/article.interface';

export interface ArticlePageComponentProps {
	artciles: ArticleType[];
}

export interface ArticleDetailedProps {
	article: ArticleType;
}
