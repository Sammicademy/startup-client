import axios from 'axios';
import $axios from 'src/api/axios';
import { API_URL, getBooksUrl } from 'src/config/api.config';
import { BooksType } from 'src/interfaces/books.interface';

export const BooksService = {
	async create(body: BooksType) {
		const { data } = await $axios.post<BooksType>(`${getBooksUrl('create')}`, body);

		return data;
	},

	async update(body: BooksType) {
		const { data } = await $axios.patch<BooksType>(`${getBooksUrl('update')}/${body._id}`, body);

		return data;
	},

	async delete(id: string) {
		const { data } = await $axios.delete<BooksType>(`${getBooksUrl('delete')}/${id}`);

		return data;
	},

	async get() {
		const { data } = await axios.get<BooksType[]>(`${API_URL}${getBooksUrl('find-all')}`);

		return data;
	},
};
