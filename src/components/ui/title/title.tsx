import React, { FC } from 'react';

export interface Props {
  title: string;
}

export const Title: FC<Props> = ({ title }) => {
  return (
    <h2 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl xl:text-4xl ">
      {title}
    </h2>
  );
};
