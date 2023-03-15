import { ReactNode } from 'react';

export interface SeoProps {
	children: ReactNode;
	metaTitle?: string;
	metaDescription?: string;
	metaKeyword?: string;
	ogImage?: string;
}
