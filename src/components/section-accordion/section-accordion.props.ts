import { Dispatch, SetStateAction } from 'react';
import { SectionType } from 'src/interfaces/instructor.interface';

export interface SectionAccordionProps {
	section: SectionType;
	setSectionTitle: Dispatch<SetStateAction<{ title: string; id: string } | null>>;
	onOpen: () => void;
	sectionIdx: number;
}
