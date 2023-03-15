import { useTranslation } from 'react-i18next';
import { withLayout } from 'src/layouts/layout';
import Seo from 'src/layouts/seo/seo';
import { ContactPageComponent } from 'src/page-component';

const ContactPage = () => {
	const { t } = useTranslation();

	return (
		<Seo
			metaTitle={
				`Sammi | ${t('contact_page_title', { ns: 'seo' })}` ||
				'Sammi | Contact us'
			}
			metaDescription={
				`Sammi | ${t('contact_page_description', { ns: 'seo' })}` ||
				'Contact with Sammi and you can ask any questions'
			}
		>
			<ContactPageComponent />
		</Seo>
	);
};

export default withLayout(ContactPage);
