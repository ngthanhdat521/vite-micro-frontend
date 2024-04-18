import { useUserStore } from '@/stores';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSession = () => {
	const { id, email, update } = useUserStore();
	const navigate = useNavigate();

	useEffect(() => {
		const user: any = localStorage.getItem('user');

		if (user) {
			update(user.id, user.email);
		} else {
			navigate('/sign-in');
		}
	}, []);

	return { id, email };
};
