import React from 'react';

export const IconButton: React.FC<
	React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
	const { children } = props;

	return (
		<button
			{...props}
			className="inline-flex items-center p-[9px] hover:text-gray-800 rounded focus:outline-none bg-gray-100 hover:bg-gray-300"
		>
			{children}
		</button>
	);
};
