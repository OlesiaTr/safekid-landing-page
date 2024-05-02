import clsx from 'clsx';
import React, { FC, MouseEvent } from 'react';

export interface Props {
  label: string;
  styles?: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: MouseEvent) => void;
  accentBtn?: boolean;
}

export const Button: FC<Props> = ({
  label,
  styles = '',
  onClick,
  accentBtn = false,
}) => {
  return (
    <button
      className={clsx(
        `rounded-[40px]  bg-accent px-10 py-3 font-semibold leading-normal md:py-5 md:text-2xl xl:py-6 xl:text-4xl  ${styles}`,
        !accentBtn && 'hover:bg-hover focus:bg-focused active:bg-pressed',
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
