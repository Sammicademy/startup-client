import { courseReducer } from './course/course.slice';
import { instructorReducer } from './instructor/instructor.slice';
import { userReducer } from './user/user.slice';

export const reducer = {
	user: userReducer,
	instructor: instructorReducer,
	course: courseReducer,
};
