import React, { FC, ReactNode } from 'react';
import { PageHeading, PageContent } from '@shared/components/presentationals';

interface IProps {
	children: ReactNode;
}

export const Main: FC<IProps> = (props) => {
	const { children } = props;

	return (
		<div className="w-full p-10">
			<PageHeading />
			<PageContent>{children}</PageContent>
		</div>
	);
};
