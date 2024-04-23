import { HttpClient } from '@services';

export class User {
	httpClient: HttpClient;

	constructor() {
		this.httpClient = new HttpClient('auth');
	}

	public async signIn(email: string, password: string) {
		const response = await this.httpClient.post('sign-in', { email, password });

        return response.data;
	}

	public async signUp(email: string, password: string) {
		const response = await this.httpClient.post('sign-up', { email, password });

        return response.data;
	}
}
