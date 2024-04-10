import React, { FC } from 'react';

export interface Props {
  label: string;
}

export const Button: FC<Props> = ({ label }) => {
  return (
    <button className="rounded-[40px]  bg-neutral-500 px-10 py-3 font-semibold leading-normal md:py-5 md:text-2xl xl:py-6 xl:text-4xl  ">
      {label}
    </button>
  );
};
