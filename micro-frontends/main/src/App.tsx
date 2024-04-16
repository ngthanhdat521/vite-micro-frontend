import React, { useState } from 'react';
import MasterPage from 'layouts/shared/master-page';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
	const { pathname } = useLocation();
	const [open, setOpen] = useState(false);

	const handleOpenDropdown = () => setOpen(!open);

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

export default App;
