import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

export const Cell: FC<
	React.DetailedHTMLProps<
		React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
		HTMLTableHeaderCellElement
	>
> = (props) => {
	const { children, className } = props;

	return (
		<th {...props} className={twMerge('px-4 py-3', className)}>
			{children}
		</th>
	);
};
