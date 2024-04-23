import { TextField } from '@components/presentationals/text-fields/text-field';
import { FieldPath, FieldValues, UseControllerProps, useController } from 'react-hook-form';
import { ErrorMessage } from '@/components/presentationals/typographies/error-message';
import React from 'react';

export type IControllerProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
	UseControllerProps<TFieldValues, TName>;

export interface IProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends IControllerProps<TFieldValues, TName> {
	id?: string;
	type: string;
	placeholder?: string;
}

export const TextBox = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
	props: IProps<TFieldValues, TName>
) => {
	const { name, control, defaultValue, disabled, rules, shouldUnregister } = props;

	const { field, fieldState } = useController({
		name,
		control,
		defaultValue,
		disabled,
		rules,
		shouldUnregister
	});

	return (
		<>
			<TextField {...props} {...field} disabled={false} />
			<ErrorMessage>{fieldState.error && fieldState.error.message}</ErrorMessage>
		</>
	);
};
