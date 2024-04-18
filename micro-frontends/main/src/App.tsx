import MasterPage from 'layouts/shared/master-page';
import React, { FC, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSession } from './hooks/useSession';

export const App: FC = () => {
	const { pathname } = useLocation();
	const [open, setOpen] = useState(false);

	const handleOpenDropdown = () => setOpen(!open);

	useSession();

	return (
		<MasterPage
			pathname={pathname.substring(1, pathname.length)}
			open={open}
			handleOpenDropdown={handleOpenDropdown}
		>
			<Outlet />
		</MasterPage>
	);
}
