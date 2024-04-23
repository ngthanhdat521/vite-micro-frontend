import React, { FC } from 'react';
import { PencilSquareIcon, TrashIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

import {
	ColumnDef,
	useReactTable,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	flexRender,
	RowData
} from '@tanstack/react-table';
import { Cell } from './cell';
import { FieldValues, useForm } from 'react-hook-form';
import { CellEdit } from './cell-edit';
import { IconButton } from '@/components/presentationals/buttons';
import { Pagination } from './pagination';

declare module '@tanstack/react-table' {
	interface TableMeta<TData extends RowData> {
		updateData: (rowIndex: number, columnId: string, value: unknown) => void;
	}
}

function useSkipper() {
	const shouldSkipRef = React.useRef(true);
	const shouldSkip = shouldSkipRef.current;

	// Wrap a function with this to skip a pagination reset temporarily
	const skip = React.useCallback(() => {
		shouldSkipRef.current = false;
	}, []);

	React.useEffect(() => {
		shouldSkipRef.current = true;
	});

	return [shouldSkip, skip] as const;
}

interface IProps<TData> {
	columns: ColumnDef<TData>[];
	initialData: TData[];
}

export const AdvanceTable = <TData extends FieldValues = FieldValues>(props: IProps<TData>) => {
	const { initialData, columns } = props;

	const [data, setData] = React.useState(initialData);
	const [selectedRow, setRowSelected] = React.useState<number | null>(null);

	const { handleSubmit, control } = useForm<TData>({
		mode: 'onChange'
	});

	const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();

	// Give our default column cell renderer editing superpowers!
	const defaultColumn: Partial<ColumnDef<TData>> = {
		cell: (props) => <CellEdit {...props} control={control} selectedRow={selectedRow} />
	};

	const table = useReactTable({
		data,
		columns,
		defaultColumn,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		autoResetPageIndex,
		// Provide our updateData function to our table meta
		meta: {
			updateData: (rowIndex, columnId, value) => {
				// Skip page index reset until after next rerender
				skipAutoResetPageIndex();
				setData((old) =>
					old.map((row, index) => {
						if (index === rowIndex) {
							return {
								...old[rowIndex]!,
								[columnId]: value
							};
						}
						return row;
					})
				);
			}
		},
		debugTable: true
	});

	return (
		<section className="w-full">
			<div className="w-full">
				<div className=" bg-gray-50 relative shadow-md sm:rounded-lg overflow-hidden">
					<div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
						<div className="w-1/2 md:w-full sm:w-full">
							<form className="flex items-center">
								<label htmlFor="simple-search" className="sr-only">
									Search
								</label>
								<div className="relative w-full">
									<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
										<svg
											aria-hidden="true"
											className="w-5 h-5 text-gray-500 dark:text-gray-400"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<input
										type="text"
										id="simple-search"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full px-10 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Search"
									/>
								</div>
							</form>
						</div>
						<div className="lg:w-1/2 md:w-full sm:w-full flex gap-5">
							<button
								type="button"
								className="flex items-center justify-center text-white bg-primary-500 hover:bg-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-700  focus:outline-none w-1/3"
							>
								<svg
									className="h-3.5 w-3.5 mr-2"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										clipRule="evenodd"
										fillRule="evenodd"
										d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									/>
								</svg>
								Add product
							</button>
							<button
								id="actionsDropdownButton"
								data-dropdown-toggle="actionsDropdown"
								className="w-1/3 flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
								type="button"
							>
								<svg
									className="-ml-1 mr-1.5 w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										clipRule="evenodd"
										fillRule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									/>
								</svg>
								Actions
							</button>
							<button
								id="filterDropdownButton"
								data-dropdown-toggle="filterDropdown"
								className="w-1/3 flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
								type="button"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									className="h-4 w-4 mr-2 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
										clipRule="evenodd"
									/>
								</svg>
								Filter
								<svg
									className="-mr-1 ml-1.5 w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										clipRule="evenodd"
										fillRule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									/>
								</svg>
							</button>
							{/* <div className="flex w-2/3">
								<button
									id="actionsDropdownButton"
									data-dropdown-toggle="actionsDropdown"
									className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
									type="button"
								>
									<svg
										className="-ml-1 mr-1.5 w-5 h-5"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											clipRule="evenodd"
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										/>
									</svg>
									Actions
								</button>
								<div
									id="actionsDropdown"
									className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
								>
									<ul
										className="py-1 text-sm text-gray-700 dark:text-gray-200"
										aria-labelledby="actionsDropdownButton"
									>
										<li>
											<a
												href="#"
												className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Mass Edit
											</a>
										</li>
									</ul>
									<div className="py-1">
										<a
											href="#"
											className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
										>
											Delete all
										</a>
									</div>
								</div>
								<button
									id="filterDropdownButton"
									data-dropdown-toggle="filterDropdown"
									className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
									type="button"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										className="h-4 w-4 mr-2 text-gray-400"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
											clipRule="evenodd"
										/>
									</svg>
									Filter
									<svg
										className="-mr-1 ml-1.5 w-5 h-5"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											clipRule="evenodd"
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										/>
									</svg>
								</button>
								<div
									id="filterDropdown"
									className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
								>
									<h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
										Choose brand
									</h6>
									<ul
										className="space-y-2 text-sm"
										aria-labelledby="filterDropdownButton"
									>
										<li className="flex items-center">
											<input
												id="apple"
												type="checkbox"
												defaultValue=""
												className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
											/>
											<label
												htmlFor="apple"
												className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
											>
												Apple (56)
											</label>
										</li>
										<li className="flex items-center">
											<input
												id="fitbit"
												type="checkbox"
												defaultValue=""
												className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
											/>
											<label
												htmlFor="fitbit"
												className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
											>
												Microsoft (16)
											</label>
										</li>
										<li className="flex items-center">
											<input
												id="razor"
												type="checkbox"
												defaultValue=""
												className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
											/>
											<label
												htmlFor="razor"
												className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
											>
												Razor (49)
											</label>
										</li>
										<li className="flex items-center">
											<input
												id="nikon"
												type="checkbox"
												defaultValue=""
												className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
											/>
											<label
												htmlFor="nikon"
												className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
											>
												Nikon (12)
											</label>
										</li>
										<li className="flex items-center">
											<input
												id="benq"
												type="checkbox"
												defaultValue=""
												className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
											/>
											<label
												htmlFor="benq"
												className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
											>
												BenQ (74)
											</label>
										</li>
									</ul>
								</div>
							</div> */}
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
							<thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
								{table.getHeaderGroups().map((headerGroup) => (
									<tr key={headerGroup.id}>
										{headerGroup.headers.map((header) => {
											return (
												<Cell key={header.id}>
													{flexRender(
														header.column.columnDef.header,
														header.getContext()
													)}
												</Cell>
											);
										})}

										<Cell scope="col" className="w-[150px]">
											<span className="">Actions</span>
										</Cell>
									</tr>
								))}
							</thead>
							<tbody>
								{table.getRowModel().rows.map((row, index) => {
									return (
										<tr key={row.id} className="border-b dark:border-gray-700">
											{row.getVisibleCells().map((cell) => {
												return (
													<Cell
														key={cell.id}
														className="font-medium text-gray-900 whitespace-nowrap dark:text-white"
													>
														{flexRender(
															cell.column.columnDef.cell,
															cell.getContext()
														)}
													</Cell>
												);
											})}

											<Cell className="flex justify-end gap-3">
												<IconButton onClick={() => setRowSelected(index)}>
													<PencilSquareIcon className="w-5 h-5 text-primary-500" />
												</IconButton>
												<IconButton
													className="inline-flex items-center p-[9px] hover:text-gray-800 rounded focus:outline-none bg-gray-100 hover:bg-gray-300"
													type="button"
												>
													<Cog6ToothIcon className="w-5 h-5 text-primary-500" />
												</IconButton>
												<IconButton
													className="inline-flex items-center p-[9px] hover:text-gray-800 rounded focus:outline-none bg-gray-100 hover:bg-gray-300"
													type="button"
												>
													<TrashIcon className="w-5 h-5 text-red-500" />
												</IconButton>
											</Cell>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
					<Pagination
						page={table.getState().pagination.pageIndex + 1}
						pageCount={100}
						pageSize={table.getState().pagination.pageSize}
						onPageSizeChange={(e) => {
							table.setPageSize(Number(e.target.value));
						}}
						onPageChange={({ selected }) => table.setPageIndex(selected)}
					/>
				</div>
			</div>
		</section>
	);
};
