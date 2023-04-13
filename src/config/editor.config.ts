export const editorModules = {
	toolbar: [
		['bold', 'italic', 'underline'],
		[{ list: 'ordered' }, { list: 'bullet' }],
	],
};

export const editLessonModules = {
	toolbar: [
		[{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
		[{ size: [] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		['link', 'image', 'video'],
		['clean'],
		['code-block'],
	],
};
