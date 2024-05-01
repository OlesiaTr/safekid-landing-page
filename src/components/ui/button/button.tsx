import React, { FC } from 'react';

export interface Props {
  label: string;
  styles?: string;
}

export const Button: FC<Props> = ({ label, styles = '' }) => {
  return (
    <button
      className={`rounded-[40px]  bg-blue px-10 py-3 font-semibold leading-normal md:py-5 md:text-2xl xl:py-6 xl:text-4xl  ${styles}`}
    >
      {label}
    </button>
  );
};
