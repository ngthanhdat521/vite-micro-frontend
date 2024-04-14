import { Navbar, Sidebar, Main } from '@shared/components/presentationals';
import React, { FC } from 'react';

export const MasterPage: FC = () => {
	return (
		<div className="grid grid-cols-12 fixed">
			<div className="col-span-2">
				<Sidebar />
			</div>
			<div className="col-span-10 h-screen overflow-y-auto">
				<Navbar />
				<Main />
			</div>
		</div>
	);
};

export default MasterPage;
