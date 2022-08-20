import React, { Ref } from 'react';

export type UiInputProps = {
  // extend with custom properties
} & React.HTMLProps<HTMLInputElement>;


export const UiInput = React.forwardRef(({ className, ...otherProps }: UiInputProps, ref: Ref<HTMLInputElement>) => {
  return (
		<input className={`px-4 py-2 bg-teal-100 ${className}`} {...otherProps} ref={ref} />
  );
});

UiInput.displayName = 'UiInput';