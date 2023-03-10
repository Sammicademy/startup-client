import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Card, CardBody } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import SectionTitle from 'src/components/section-title/section-title';
import { faq } from 'src/config/constants';

const FaqPageComponent = () => {
	const { t } = useTranslation();

	return (
		<>
			<SectionTitle title={t('faq_title', { ns: 'global' })} subtitle='' textAlign={'center'} />
			<Box mt={5} minH={'89vh'} maxW={'container.md'} mx={'auto'}>
				<Card boxShadow={'dark-lg'}>
					<CardBody>
						{faq.map((item, idx) => (
							<Accordion mt={5} key={idx} defaultIndex={idx === 0 ? 0 : idx} allowToggle>
								<AccordionItem borderBottom={'none'}>
									<AccordionButton>
										<Box as='span' flex='1' fontSize={'lg'} textAlign='left'>
											{t(item.question, { ns: 'global' })}
										</Box>
										<AccordionIcon color={'facebook.500'} />
									</AccordionButton>
									<AccordionPanel pl={10} borderLeft={'4px'} borderLeftColor={'facebook.500'}>
										{t(item.answer, { ns: 'global' })}
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						))}
					</CardBody>
				</Card>
			</Box>
		</>
	);
};

export default FaqPageComponent;
