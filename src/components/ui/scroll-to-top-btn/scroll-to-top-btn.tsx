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
        'fixed  bottom-10 right-1 size-[50px] cursor-pointer border-4 border-solid border-upBtn bg-transparent transition lg:size-[80px]',
        'z-[2] rounded-full hover:border-pressed  active:border-pressed',
        { 'opacity-0': !isVisible },
      )}
      onClick={(e: MouseEvent) => smoothScroll(e)}
      aria-label="Повернутись догори"
      role="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <g clipPath="url(#clip0_493_828)">
          <path d="M27.2083 6.8397C26.6223 6.25449 25.8281 5.92578 24.9999 5.92578C24.1718 5.92578 23.3775 6.25449 22.7916 6.8397L11.002 18.623C10.4158 19.2093 10.0864 20.0044 10.0864 20.8334C10.0864 21.6625 10.4158 22.4576 11.002 23.0439C11.5882 23.6301 12.3834 23.9594 13.2124 23.9594C14.0415 23.9594 14.8366 23.6301 15.4228 23.0439L21.8749 16.5939V40.6251C21.8749 41.4539 22.2042 42.2488 22.7902 42.8348C23.3763 43.4209 24.1711 43.7501 24.9999 43.7501C25.8287 43.7501 26.6236 43.4209 27.2096 42.8348C27.7957 42.2488 28.1249 41.4539 28.1249 40.6251V16.5939L34.5749 23.0439C34.8652 23.3341 35.2098 23.5644 35.5891 23.7215C35.9683 23.8786 36.3748 23.9594 36.7853 23.9594C37.1959 23.9594 37.6023 23.8786 37.9816 23.7215C38.3609 23.5644 38.7055 23.3341 38.9958 23.0439C39.286 22.7536 39.5163 22.409 39.6734 22.0297C39.8305 21.6505 39.9113 21.244 39.9113 20.8334C39.9113 20.4229 39.8305 20.0164 39.6734 19.6372C39.5163 19.2579 39.286 18.9133 38.9958 18.623L27.2083 6.8397Z" />
        </g>
        <defs>
          <clipPath id="clip0_493_828">
            <rect width="50" height="50" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
};
