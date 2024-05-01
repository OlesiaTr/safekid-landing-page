import React, { FC, MouseEvent } from 'react';

export interface Props {
  label: string;
  styles?: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: MouseEvent) => void;
}

export const Button: FC<Props> = ({ label, styles = '', onClick }) => {
  return (
    <button
      className={`rounded-[40px]  bg-accent px-10 py-3 font-semibold leading-normal md:py-5 md:text-2xl xl:py-6 xl:text-4xl  ${styles}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
