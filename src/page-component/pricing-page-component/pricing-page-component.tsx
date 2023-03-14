import { Divider, Heading, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Pricing } from 'src/components';

const options = [
	{ id: 1, desc: '1 lorem ipsum' },
	{ id: 2, desc: 'Lorem, ipsum dolor.' },
	{ id: 3, desc: 'Monthly Updates' },
];

const PricingPageComponent = () => {
	const { t } = useTranslation();

	return (
		<>
			<Stack spacing={4} py={10} width={'100%'} direction={'column'}>
				<Stack
					p={5}
					alignItems={'center'}
					justifyContent={{ base: 'flex-start', md: 'space-around' }}
					direction={{ base: 'column', md: 'row' }}
				>
					<Stack width={{ base: '100%', md: '40%' }} textAlign={'center'}>
						<Heading size={'lg'}>
							{t('pricing_title', { ns: 'global' })}{' '}
							<Text color='green.400'>
								{t('pricing_title_green', { ns: 'global' })}
							</Text>
						</Heading>
					</Stack>
					<Stack width={{ base: '100%', md: '60%' }}>
						<Text textAlign={'center'}>
							{t('pricing_description', { ns: 'global' })}
						</Text>
					</Stack>
				</Stack>
				<Divider />
				<Pricing title={'Standard'} price={20} options={options} />
				<Divider />
				<Pricing title={'Premium'} price={32} options={options} checked />
				<Divider />
				<Pricing title={'Business'} price={50} options={options} />
			</Stack>
		</>
	);
};

export default PricingPageComponent;
