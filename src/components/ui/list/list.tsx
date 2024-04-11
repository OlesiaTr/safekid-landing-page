import React, { FC } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export interface Props {
  children: { label: string }[];
  styles?: string;
  icon?: boolean;
}

export const List: FC<Props> = ({ children, styles = '', icon = false }) => {
  return (
    <ul className={clsx(`pl-6 ${styles}`, icon && 'pl-0')}>
      {children.map((item, id) => {
        return !icon ? (
          <li key={id} className="md:text-lg xl:text-2xl">
            {item.label}
          </li>
        ) : (
          <li
            key={id}
            className="flex items-baseline gap-2 md:text-lg xl:text-2xl"
          >
            {icon && <CheckIcon className="size-6 min-w-6  stroke-2 " />}{' '}
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};
