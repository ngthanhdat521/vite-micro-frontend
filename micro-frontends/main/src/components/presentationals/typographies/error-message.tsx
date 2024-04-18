import React, { FC, ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

export const ErrorMessage: FC<IProps> = (props) => {
	const { children } = props;

	return <p className="text-red-600 text-sm">{children}</p>;
};
