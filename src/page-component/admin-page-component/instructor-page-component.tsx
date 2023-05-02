import {
	Box,
	Card,
	CardBody,
	Flex,
	HStack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { AdminInstructorTable } from 'src/components';
import SectionTitle from 'src/components/section-title/section-title';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { RecordVideoIcon } from 'src/icons';

const InstructorPageComponent = () => {
	const { instructors } = useTypedSelector(state => state.admin);
	const { t } = useTranslation();

	return (
		<>
			<Card mt={10}>
				<CardBody>
					<HStack>
						<Box w={'30%'}>
							<SectionTitle
								title={t('instructors_section_title', { ns: 'admin' })}
								subtitle={t('instructors_section_descr', { ns: 'admin' })}
							/>
						</Box>
						<Flex w={'70%'} justify={'flex-end'}>
							<RecordVideoIcon />
						</Flex>
					</HStack>
				</CardBody>
			</Card>

			<Box mt={10} mx={'auto'}>
				<Tabs isFitted variant='solid-rounded' colorScheme={'facebook'}>
					<TabList mb='1em'>
						<Tab>{t('approved_instructors', { ns: 'admin' })}</Tab>
						<Tab>{t('applied_instructors', { ns: 'admin' })}</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<AdminInstructorTable
								instructors={instructors.filter(c => c.approved)}
								approved={true}
							/>
						</TabPanel>
						<TabPanel>
							<AdminInstructorTable
								instructors={instructors.filter(c => !c.approved)}
								approved={false}
							/>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</>
	);
};

export default InstructorPageComponent;
