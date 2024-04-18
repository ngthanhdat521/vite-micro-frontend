import { unstable_batchedUpdates } from 'react-dom';
import { create } from 'zustand';

interface IModalStore {
	title: string;
	content: string;
	type: string;
	displayed: boolean;
	open: (title: string, content: string, type: string) => void;
	close: () => void;
}

export const userModalStore = create<IModalStore>((set) => ({
	title: '',
	content: '',
	type: '',
	displayed: false,
	open: (title: string, content: string, type: string) =>
		set({ title, content, type, displayed: true }),
	close: () => set({ displayed: false })
}));

export const notify = (title: string, content: string) => {
	unstable_batchedUpdates(() => {
		userModalStore.getState().open(title, content, 'notice');
	});
};

export const close = () => {
	unstable_batchedUpdates(() => {
		userModalStore.getState().close();
	});
};
