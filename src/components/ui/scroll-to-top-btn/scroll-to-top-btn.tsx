'use client';

import React, { FC, MouseEvent } from 'react';
import clsx from 'clsx';

import css from './scroll-to-top-btn.module.css';
import { smoothScroll, useScrollVisibility } from '@/utils';

export interface Props {
  sectionIdStart: string;
}

export const ScrollToTopBtn: FC<Props> = ({ sectionIdStart }) => {
  const isVisible = useScrollVisibility(sectionIdStart);

  return (
    <a
      href="/"
      className={clsx(
        css.scrollBtn,
        'fixed bottom-10 right-1 size-14 cursor-pointer bg-purple-100 text-white transition',
        'z-[2] rounded-full hover:bg-purple-300',
        { 'opacity-0': !isVisible },
      )}
      onClick={(e: MouseEvent) => smoothScroll(e)}
      aria-label="Повернутись догори"
      role="button"
    />
  );
};
