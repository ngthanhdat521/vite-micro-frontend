import { ConfirmationModal, NoticeModal } from '@/components/presentationals/modals';
import { userModalStore } from '@/stores';
import { FC, ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

export const ModalProviders: FC<IProps> = (props) => {
	const { children } = props;
	const { title, content, displayed, type = 'notice', close } = userModalStore();

	const modal =
		type === 'notice' ? (
			<NoticeModal title={title} content={content} onClose={close} />
		) : (
			<ConfirmationModal title={title} content={content} onClose={close} />
		);

	return (
		<>
			{displayed && modal} {children}
		</>
	);
};
