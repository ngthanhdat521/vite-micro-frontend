import { HttpClient } from '@services/http-client';
import { useState } from 'react';

const httpClient = new HttpClient('auth');

interface ISession {
	email: string;
	isAuthenticated: boolean;
}

export const useAuthentication = () => {
	const [session, setSession] = useState<ISession>({
		email: '',
		isAuthenticated: false
	});

	return {
		signIn: async (email: string, password: string) => {
			try {
				const response = await httpClient.post('sign_in', { email, password });
				return setSession({ email, isAuthenticated: true });
			} catch (error) {
				return setSession({ email, isAuthenticated: false });
			}
		},
		session
	};
};
