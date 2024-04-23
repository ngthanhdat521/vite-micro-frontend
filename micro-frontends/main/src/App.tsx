import MasterPage from 'layouts/shared/master-page';
import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSession } from './hooks/useSession';

export const App: FC = () => {
	const { pathname } = useLocation();
	const [open, setOpen] = useState(false);
	const [isSidebarDisplayed, setIsSidebarDisplayed] = useState(true);

	const handleOpenDropdown = () => setOpen(!open);

	useSession();

	useEffect(() => {
		if (window.innerWidth <= 768) setIsSidebarDisplayed(false);
	}, []);

	return (
		<MasterPage
			pathname={pathname.substring(1, pathname.length)}
			open={open}
			isSidebarDisplayed={isSidebarDisplayed}
			handleOpenSidebar={() => setIsSidebarDisplayed(!isSidebarDisplayed)}
			handleOpenDropdown={handleOpenDropdown}
		>
			<Outlet />
		</MasterPage>
	);
};
