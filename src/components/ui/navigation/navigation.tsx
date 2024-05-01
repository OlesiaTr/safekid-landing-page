import { smoothScroll } from '@/utils';
import React, { FC, MouseEvent } from 'react';

export interface Props {
  location: string;
  links: {
    path: string;
    label: string;
  }[];
}

export const Navigation: FC<Props> = ({ location, links }) => {
  return (
    <nav className={location === 'header' ? 'hidden lg:block' : ''}>
      <ul className="flex lg:gap-2 xl:gap-8 xxl:gap-12">
        {links.map((item, id) => (
          <li key={id}>
            <a
              href={item.path}
              className="flex py-[32px] text-lg font-medium leading-normal xl:text-xl"
              onClick={(e: MouseEvent) => smoothScroll(e, item.path)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
