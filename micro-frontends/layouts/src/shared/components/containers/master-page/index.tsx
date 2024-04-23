import { Main, Navbar, Sidebar } from '@shared/components/presentationals';
import { FC, ReactNode } from 'react';

interface IProps {
	children: ReactNode;
	pathname: string;
	open: boolean;
	handleOpenDropdown: () => void;
	isSidebarDisplayed: boolean;
	handleOpenSidebar: () => void;
}

export const MasterPage: FC<IProps> = (props) => {
	const {
		children,
		pathname,
		open = false,
		isSidebarDisplayed,
		handleOpenSidebar,
		handleOpenDropdown
	} = props;

	return (
		<div className="grid grid-cols-12 fixed w-full">
			{isSidebarDisplayed && (
				<>
					<div className="lg:col-span-2 lg:block lg:relative sm:fixed sm:z-20">
						<Sidebar />
					</div>

					<div onClick={handleOpenSidebar} className="sm:fixed z-[19] w-full h-full bg-gray-50 opacity-50 sm:block lg:hidden left-0 top-0" />
				</>
			)}
			<div className="lg:col-span-10 sm:col-span-12 h-screen overflow-y-auto">
				<Navbar
					open={open}
					handleOpenDropdown={handleOpenDropdown}
					handleOpenSidebar={handleOpenSidebar}
				/>
				<Main pathname={pathname}>{children}</Main>
			</div>
		</div>
	);
};

export default MasterPage;
