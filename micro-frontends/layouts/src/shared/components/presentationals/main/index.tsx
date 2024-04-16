import React, { FC, ReactNode } from 'react';
import { PageHeading, PageContent } from '@shared/components/presentationals';

interface IProps {
	children: ReactNode;
	pathname: string;
}

export const Main: FC<IProps> = (props) => {
	const { children, pathname } = props;

	return (
		<div className="w-full p-10">
			<PageHeading pathname={pathname} />
			<PageContent>{children}</PageContent>
		</div>
	);
};
