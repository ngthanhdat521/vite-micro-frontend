import React from 'react';
import { Spinner } from '../spinners';

interface IProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	loading?: boolean;
}

export const SpinnerButton: React.FC<IProps> = (props) => {
	const { loading, children } = props;

	return (
		<button
			{...props}
			className="w-full flex justify-center gap-3 items-center text-white bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
		>
			{loading && <Spinner />}
			{children}
		</button>
	);
};
