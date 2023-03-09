import { Avatar, Box, Card, CardBody, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { calculateEstimatedReadingTime } from 'src/helpers/time.helper';
import { ArticleDetailedProps } from './article-page-component.props';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { RichText } from '@graphcms/rich-text-react-renderer';

const ArticleDetailedComponent = ({ article }: ArticleDetailedProps) => {
	const { t } = useTranslation();

	return (
		<>
			<Card>
				<CardBody>
					<Box
						w={'full'}
						h={{ base: '30vh', lg: '50vh' }}
						backgroundImage={`url(${article.image.url})`}
						backgroundPosition={'center'}
						backgroundSize={'cover'}
						backgroundRepeat={'no-repeat'}
						pos={'relative'}
					>
						<Box pos={'absolute'} top={0} left={0} right={0} bottom={0} bg={'rgba(0, 0, 0, .5)'} />
						<Stack
							justify={'center'}
							spacing={3}
							w={{ base: '100%', lg: '70%' }}
							pl={{ base: 2, lg: 10 }}
							pos={'relative'}
							h={'full'}
						>
							<Heading>{article.title}</Heading>
							<Text>{article.excerpt}</Text>
							<HStack>
								<Avatar src={article.author.avatar.url} />
								<Box>
									<Text>{article.author.name}</Text>
									<Text color={'gray.500'}>
										{format(new Date(article.createdAt), 'dd MMM, yyyy')} ·{' '}
										{calculateEstimatedReadingTime(article.description.text)}
										{t('read_article', { ns: 'layout' })}
									</Text>
								</Box>
							</HStack>
						</Stack>
					</Box>
				</CardBody>
			</Card>
			<Box>
				<RichText
					content={article.description.raw}
					renderers={{
						h1: ({ children }) => (
							<Heading as={'h1'} mt={2}>
								{children}
							</Heading>
						),
						h2: ({ children }) => (
							<Heading as={'h2'} mt={2}>
								{children}
							</Heading>
						),
						h3: ({ children }) => <Heading as={'h3'}>{children}</Heading>,
						h4: ({ children }) => <Heading as={'h4'}>{children}</Heading>,
						h5: ({ children }) => <Heading as={'h5'}>{children}</Heading>,
						bold: ({ children }) => <Text fontWeight={'bold'}>{children}</Text>,
						p: ({ children }) => <Text my={4}>{children}</Text>,
						img: children => <Image src={children.src} alt={children.altText} width={children.width} height={children.height} />,
						a: children => <Image src={children.href} alt={children.title} />,
					}}
				/>
			</Box>
		</>
	);
};

export default ArticleDetailedComponent;
