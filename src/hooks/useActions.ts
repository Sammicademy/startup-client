import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { allActions } from 'src/store/root-action';

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};
