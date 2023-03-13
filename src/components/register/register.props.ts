export interface RegisterProps {
	onNavigateStateComponent: (component: 'login' | 'register' | 'verification' | 'account-recovery') => void;
}
