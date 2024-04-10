import React, { FC } from 'react';

export interface Props {
  title: string;
}

export const ListTitle: FC<Props> = ({ title }) => {
  return <h3 className="font-bold md:text-lg xl:text-2xl">{title}</h3>;
};
