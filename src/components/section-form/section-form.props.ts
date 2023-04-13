export interface SectionFormProps {
	onClose: () => void;
	values?: {
		title: string;
		id: string;
	} | null;
}
