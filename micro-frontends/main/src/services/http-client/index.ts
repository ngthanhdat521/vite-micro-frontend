import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:5000/'
});

instance.defaults.headers['Authorization'] = localStorage.getItem('access_token');

export class HttpClient {
	path: string;
	constructor(path: string) {
		this.path = path;
	}

	get(url: string) {
		return instance.get(`${this.path}/${url}`);
	}

	post<TBody>(url: string, body: TBody) {
		return instance.post(`${this.path}/${url}`, body);
	}
}
