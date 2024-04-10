import React, { FC } from 'react';

export interface Props {
  children: { label: string }[];
  styles?: string;
}

export const List: FC<Props> = ({ children, styles = '' }) => {
  return (
    <ul className={styles}>
      {children.map((item, id) => (
        <li key={id} className="md:text-lg xl:text-2xl">
          {item.label}
        </li>
      ))}
    </ul>
  );
};
