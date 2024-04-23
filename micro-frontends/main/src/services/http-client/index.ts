import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://5281-14-191-112-126.ngrok-free.app/v1'
});

instance.defaults.headers['Authorization'] = localStorage.getItem('access_token');

axios.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);

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
