import {
	Box,
	Card,
	CardBody,
	Grid,
	HStack,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { DraftCourseCard } from 'src/components';
import SectionTitle from 'src/components/section-title/section-title';
import { useTypedSelector } from 'src/hooks/useTypedSelector';

const DraftCourseComponent = () => {
	const { courses } = useTypedSelector(state => state.instructor);
	const { t } = useTranslation();

	return (
		<>
			<Card>
				<CardBody p={0}>
					<HStack justify={'center'}>
						<Stack>
							<SectionTitle
								title={t('draft_courses', { ns: 'instructor' })}
								subtitle={t('draft_courses_description', { ns: 'instructor' })}
							/>
						</Stack>
						<Image width={480} height={480} src='/images/draft.png' alt='instructor' />
					</HStack>
				</CardBody>
			</Card>

			<Box mt={10}>
				<Tabs isFitted variant='enclosed'>
					<TabList mb='1em'>
						<Tab>{t('draft', { ns: 'instructor' })}</Tab>
						<Tab>{t('active', { ns: 'instructor' })}</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Grid gridTemplateColumns={'1fr 1fr'} gap={4}>
								{courses
									.filter(c => !c.isActive)
									.map(item => (
										<DraftCourseCard key={item.slug} item={item} />
									))}
							</Grid>
						</TabPanel>
						<TabPanel>
							<Grid gridTemplateColumns={'1fr 1fr'} gap={4}>
								{courses
									.filter(c => c.isActive)
									.map(item => (
										<DraftCourseCard key={item.slug} item={item} />
									))}
							</Grid>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</>
	);
};

export default DraftCourseComponent;
