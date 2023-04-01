import * as userActions from './user/user.action';
import { userSliceAction } from './user/user.slice';

export const allActions = { ...userSliceAction, ...userActions };
