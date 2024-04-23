import { AdvanceTable } from '@components/containers/tables';
import { ColumnDef } from '@tanstack/react-table';

interface IProduct {
	id: string;
	title: string;
	description: string;
	price: number;
	src: string;
}

export const UserManagementPage = () => {
	const columns: ColumnDef<IProduct>[] = [
		{
			header: 'Product',
			accessorKey: 'title',
			
		},
		{
			header: 'Description',
			accessorKey: 'description'
		},
		{
			header: 'Price',
			accessorKey: 'price'
		},
		{
			header: 'Source',
			accessorKey: 'src'
		}
	];

	return (
		<div
			className="w-full h-full mt-10"
			aria-labelledby="slide-over-title"
			role="dialog"
			aria-modal="true"
		>
			<AdvanceTable
				initialData={[
					{
						id: '1',
						title: 'Apple',
						price: 500,
						description:
							'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ea voluptas,',
						src: 'test'
					},
					{
						id: '2',
						title: 'Apple',
						price: 500,
						description:
							'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ea voluptas,',
						src: 'test'
					},
					{
						id: '3',
						title: 'Apple',
						price: 500,
						description:
							'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ea voluptas,',
						src: 'test'
					}
				]}
				columns={columns}
			/>
		</div>
	);
};
