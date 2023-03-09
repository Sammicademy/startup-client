import { gql, request } from 'graphql-request';
import { ArticleType } from 'src/interfaces/article.interface';
import { Language } from 'src/interfaces/constants.interface';

const grapqhlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const Articles = {
	async getArtciles(lng: Language) {
		const query = gql`
			query Articles($lng: Language) {
				articles(where: { language: $lng }) {
					createdAt
					id
					title
					excerpt
					slug
					image {
						url
					}
					language
					author {
						name
						avatar {
							url
						}
					}
					description {
						text
					}
				}
			}
		`;

		const result = await request<{ articles: ArticleType[] }>(grapqhlAPI, query, { lng });
		return result.articles;
	},

	async getDetailedArticle(slug: string) {
		const query = gql`
			query DeatiledArticle($slug: String!) {
				article(where: { slug: $slug }) {
					createdAt
					id
					title
					excerpt
					slug
					image {
						url
					}
					language
					author {
						name
						avatar {
							url
						}
					}
					description {
						text
						raw
					}
				}
			}
		`;

		const result = await request<{ article: ArticleType }>(grapqhlAPI, query, { slug });
		return result.article;
	},
};
