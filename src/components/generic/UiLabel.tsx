import React, { Ref } from 'react';

export type UiLabelProps = {
  children: React.ReactNode | React.ReactNode[]
} & React.HTMLProps<HTMLLabelElement>;

export const UiLabel = React.forwardRef(({ children, ...other }: UiLabelProps, ref: Ref<HTMLLabelElement>) => {
	return (
		<label ref={ref} {...other} className="w-full">
			{children}
		</label>
	);
});

UiLabel.displayName = 'UiLabel';