import React from 'react';
import { TextField } from '@components/presentationals/text-fields/text-field';
import { FieldPath, FieldValues, UseControllerProps, useController } from 'react-hook-form';
import { ErrorMessage } from '@/components/presentationals/typographies/error-message';

interface IProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TName> {
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
	const {
		id,
		type,
		placeholder,
		name,
		control,
		defaultValue,
		disabled,
		rules,
		shouldUnregister
	} = props;

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
			<TextField id={id} type={type} placeholder={placeholder} {...field} disabled={false} />
			<ErrorMessage>{fieldState.error && fieldState.error.message}</ErrorMessage>
		</>
	);
};
