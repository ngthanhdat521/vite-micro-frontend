import React, { FC, ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

export const PageContent: FC<IProps> = (props) => {
	const { children } = props;
	return <div className="bg-white">{children}</div>;
};
