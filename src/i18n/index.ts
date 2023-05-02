import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
	.use(initReactI18next)
	.use(detector)
	.use(backend)
	.init({
		ns: ['layout', 'home', 'courses', 'books', 'global', 'seo', 'instructor', 'admin'],
		backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
		fallbackLng: 'en',
		interpolation: { escapeValue: false },
		detection: { order: ['cookie', 'localstorage'], caches: ['cookie'] },
	});

export default i18n;
