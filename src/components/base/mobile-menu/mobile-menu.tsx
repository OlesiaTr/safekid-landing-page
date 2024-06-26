'use client';

import React, { Dispatch, FC, MouseEvent, SetStateAction } from 'react';

import data from '@/data/header.json';
import { smoothScroll } from '@/utils';

export interface Props {
  closeModal: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenu: FC<Props> = ({ closeModal }) => {
  return (
    <div className="fixed w-full transition lg:hidden">
      <div className="rounded-b-[40px] bg-accent px-4 py-6 md:px-20">
        <ul className="flex flex-col gap-4">
          {data.navLinks.map((item, id) => (
            <li
              key={id}
              className="cursor-pointer"
              onClick={(e: MouseEvent) => {
                closeModal(false);
                smoothScroll(e, item.path);
              }}
            >
              <a
                href={item.path}
                className="text-xl font-medium leading-normal text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
