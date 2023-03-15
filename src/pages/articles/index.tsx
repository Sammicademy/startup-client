import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';
import { ArticleType } from 'src/interfaces/article.interface';
import { Language } from 'src/interfaces/constants.interface';
import { withLayout } from 'src/layouts/layout';
import Seo from 'src/layouts/seo/seo';
import { ArticlePageComponent } from 'src/page-component';
import { Articles } from 'src/services/article.service';

const ArticlePage = ({ articles }: ArticlesPageProps) => {
	const { t } = useTranslation();
	return (
		<Seo
			metaTitle={
				`Sammi | ${t('article_page_title', { ns: 'seo' })}` ||
				'Sammi | Articles'
			}
			metaDescription={
				`Sammi | ${t('article_page_description', { ns: 'seo' })}` ||
				'Useful articles of sammi'
			}
		>
			<ArticlePageComponent artciles={articles} />
		</Seo>
	);
};

export default withLayout(ArticlePage);

export const getServerSideProps: GetServerSideProps<
	ArticlesPageProps
> = async ({ req }) => {
	const lng: Language = req.cookies.i18next as Language;
	const articles = await Articles.getArtciles(lng);

	return {
		props: {
			articles,
		},
	};
};

interface ArticlesPageProps extends Record<string, unknown> {
	articles: ArticleType[];
}
