import { Navbar, Sidebar, Main } from '@shared/components/presentationals';
import React, { FC, ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

export const MasterPage: FC<IProps> = (props) => {
	const { children } = props;

	return (
		<div className="grid grid-cols-12 fixed w-full">
			<div className="col-span-2">
				<Sidebar />
			</div>
			<div className="col-span-10 h-screen overflow-y-auto">
				<Navbar />
				<Main>{children}</Main>
			</div>
		</div>
	);
};

export default MasterPage;
