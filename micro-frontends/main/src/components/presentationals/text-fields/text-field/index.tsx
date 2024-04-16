import React, { ChangeEventHandler } from 'react';
import { ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form';

interface IProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends ControllerRenderProps<TFieldValues, TName> {
	id?: string;
	type: string;
	placeholder?: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export const TextField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
	props: IProps<TFieldValues, TName>
) => {
	const { id, ref, placeholder, type, name, value, disabled, onBlur, onChange } = props;

	return (
		<input
			id={id}
			ref={ref}
			name={name}
			type={type}
			value={value}
			disabled={disabled}
			className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
		/>
	);
};
