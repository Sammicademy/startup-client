export const API_URL = `${process.env.NEXT_PUBLIC_API_SERVICE}/api`;

export const getAuthUrl = (url: string) => `/auth/${url}`;
export const getMailUrl = (url: string) => `/mail/${url}`;
export const getUserUrl = (url: string) => `/user/${url}`;
export const getInstructorurl = (url: string) => `/instructor/${url}`;
export const getFileUrl = (url: string) => `/file/${url}`;
export const getCourseUrl = (url: string) => `/course/${url}`;
export const getSectionUrl = (url: string) => `/section/${url}`;
export const getLessonUrl = (url: string) => `/lesson/${url}`;
export const getAdminUrl = (url: string) => `/admin/${url}`;
export const getBooksUrl = (url: string) => `/books/${url}`;
export const getPaymentUrl = (url: string) => `/payment/${url}`;
export const getReviewUrl = (url: string) => `/review/${url}`;
