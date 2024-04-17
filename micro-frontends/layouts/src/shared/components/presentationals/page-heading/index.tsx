import React, { FC } from 'react';

interface IProps {
	pathname: string;
}

export const PageHeading: FC<IProps> = (props) => {
	const { pathname } = props;

	const breadcrumbs = pathname.split('/');

	return (
		<div className="lg:flex lg:items-center lg:justify-between">
			<div className="min-w-0 flex-1">
				<div className="flex" aria-label="Breadcrumb">
					<ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
						{breadcrumbs.map((breadcrumb, index) => (
							<li>
								<div className="flex items-center">
									{index === 0 ? (
										<svg
											className="w-3 h-3 me-2.5"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
										</svg>
									) : (
										<svg
											className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 6 10"
										>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="m1 9 4-4-4-4"
											/>
										</svg>
									)}
									<a
										href="#"
										className="text-sm capitalize ms-1 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
									>
										{breadcrumb}
									</a>
								</div>
							</li>
						))}
					</ol>
				</div>
			</div>
			<div className="mt-5 flex lg:ml-4 lg:mt-0">
				<span className="hidden sm:block">
					<button
						type="button"
						className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>
						<svg
							className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
						</svg>
						Edit
					</button>
				</span>
				<span className="ml-3 hidden sm:block">
					<button
						type="button"
						className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>
						<svg
							className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
							<path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
						</svg>
						View
					</button>
				</span>
				<span className="sm:ml-3">
					<button
						type="button"
						className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						<svg
							className="-ml-0.5 mr-1.5 h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clipRule="evenodd"
							/>
						</svg>
						Publish
					</button>
				</span>
				{/* Dropdown */}
				<div className="relative ml-3 sm:hidden">
					<button
						type="button"
						className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
						id="mobile-menu-button"
						aria-expanded="false"
						aria-haspopup="true"
					>
						More
						<svg
							className="-mr-1 ml-1.5 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
					{/*
  Dropdown menu, show/hide based on menu state.

  Entering: "transition ease-out duration-200"
    From: "transform opacity-0 scale-95"
    To: "transform opacity-100 scale-100"
  Leaving: "transition ease-in duration-75"
    From: "transform opacity-100 scale-100"
    To: "transform opacity-0 scale-95"
*/}
					<div
						className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="mobile-menu-button"
						tabIndex={-1}
					>
						{/* Active: "bg-gray-100", Not Active: "" */}
						<a
							href="#"
							className="block px-4 py-2 text-sm text-gray-700"
							role="menuitem"
							tabIndex={-1}
							id="mobile-menu-item-0"
						>
							Edit
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-sm text-gray-700"
							role="menuitem"
							tabIndex={-1}
							id="mobile-menu-item-1"
						>
							View
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
