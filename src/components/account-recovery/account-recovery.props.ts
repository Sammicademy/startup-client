export interface AccountRecoveryProps {
	onNavigateStateComponent: (component: 'login' | 'register' | 'verification' | 'account-recovery') => void;
}
