import {
	Avatar,
	Box,
	Card,
	CardBody,
	Divider,
	Grid,
	Heading,
	HStack,
	Image,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import { testimonialsCarousel } from 'src/config/carousel';
import { ArticlePageComponentProps } from './article-page-component.props';
import { format } from 'date-fns';
import { calculateEstimatedReadingTime } from 'src/helpers/time.helper';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const ArticlePageComponent = ({ artciles }: ArticlePageComponentProps) => {
	const cardBackgroundColor = useColorModeValue('white', 'gray.900');
	const { t } = useTranslation();

	return (
		<>
			<Card my={10}>
				<CardBody>
					<Carousel responsive={testimonialsCarousel}>
						{artciles.map(item => (
							<Box
								key={item.id}
								w={'full'}
								h={{ base: '40vh', lg: '60vh' }}
								backgroundImage={`url(${item.image.url})`}
								backgroundPosition={'center'}
								backgroundSize={'cover'}
								backgroundRepeat={'no-repeat'}
								pos={'relative'}
							>
								<Link href={`/articles/${item.slug}`}>
									<Box pos={'absolute'} top={0} left={0} right={0} bottom={0} bg={'rgba(0, 0, 0, .7)'} />
									<Stack
										justify={'center'}
										spacing={3}
										w={{ base: '100%', lg: '70%' }}
										pl={{ base: 2, lg: 10 }}
										pos={'relative'}
										h={'full'}
									>
										<Heading color={'white'}>{item.title}</Heading>
										<Text color={'gray.400'}>{item.excerpt}</Text>
										<HStack>
											<Avatar src={item.author.avatar.url} />
											<Box>
												<Text color={'white'}>{item.author.name}</Text>
												<Text color={'gray.500'}>
													{format(new Date(item.createdAt), 'dd MMM, yyyy')} ·{' '}
													{calculateEstimatedReadingTime(item.description.text)}
													{t('read_article', { ns: 'layout' })}
												</Text>
											</Box>
										</HStack>
									</Stack>
								</Link>
							</Box>
						))}
					</Carousel>
				</CardBody>
			</Card>

			<Grid gridTemplateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap={4}>
				{artciles.map(item => (
					<Box key={item.id} w={'full'} bg={cardBackgroundColor} boxShadow={'2xl'} rounded={'md'} p={6}>
						<Link href={`/articles/${item.slug}`}>
							<Image
								src={item.image.url}
								alt={item.title}
								borderRadius={'lg'}
								w={'full'}
								h={'300px'}
								objectFit={'cover'}
								mb={5}
							/>
							<Stack>
								<Heading fontSize={'2xl'} fontFamily={'body'}>
									{item.title}
								</Heading>
								<Text color={'gray.500'}>{item.excerpt}</Text>
							</Stack>
							<Divider my={5} />
							<Stack mt={6} direction={'row'} spacing={4} align={'center'}>
								<Avatar src={item.author.avatar.url} />
								<Stack direction={'column'} spacing={0} fontSize={'sm'}>
									<Text fontWeight={600}>{item.author.name}</Text>
									<Text color={'gray.500'}>
										{format(new Date(item.createdAt), 'dd MMM, yyyy')} · {calculateEstimatedReadingTime(item.description.text)}
										{t('read_article', { ns: 'layout' })}
									</Text>
								</Stack>
							</Stack>
						</Link>
					</Box>
				))}
			</Grid>
		</>
	);
};

export default ArticlePageComponent;
