import React, { Ref, SyntheticEvent } from 'react';

export type UiButtonProps = {
  children: React.ReactNode | React.ReactNode[]
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: SyntheticEvent) => any
} & React.HTMLProps<HTMLButtonElement>;

export const UiButton = React.forwardRef(({ children, onClick, className, ...otherProps }: UiButtonProps, ref: Ref<HTMLButtonElement>) => {
  function handleOnClick(event: SyntheticEvent) {
    if (otherProps.disabled) return;

    if (onClick) {
      onClick(event);
    }
  }

  return (
    <button className={`'inline-block py-2 px-4 cursor-pointer bg-teal-300' ${className}`} {...otherProps} ref={ref} onClick={handleOnClick}>
      {children}
    </button>
  );
});

UiButton.displayName = 'UiButton';