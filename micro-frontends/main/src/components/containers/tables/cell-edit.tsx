import { CellContext } from '@tanstack/react-table';
import { Control, FieldPath, FieldValues, Path } from 'react-hook-form';
import { TextBox } from '@components/containers/textboxes';

interface IProps<TFieldValues extends FieldValues = FieldValues, TContext = any>
	extends CellContext<TFieldValues, unknown> {
	control: Control<TFieldValues, TContext>;
	selectedRow: number | null;
}

export const CellEdit = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
	props: IProps<TFieldValues, TName>
) => {
	const {
		cell,
		row: { index },
		column: { id },
		table,
		control,
		selectedRow
	} = props;

	// When the input is blurred, we'll call our table meta's updateData function
	const handleBlur = () => {
		table.options.meta?.updateData(index, id, 'updateData');
	};

	if (selectedRow === index) {
		return (
			<TextBox
				control={control}
				name={id as Path<TFieldValues>}
				type="text"
				onBlur={handleBlur}
			/>
		);
	}

	return <span>{cell.getValue() as string}</span>;
};
