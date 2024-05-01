import data from '@/data/header.json';
import { smoothScroll } from '@/utils';
import { MouseEvent } from 'react';

export const Logo = () => {
  return (
    <a
      href={data.logo.path}
      aria-label={data.logo.ariaLabel}
      className="text-[32px] font-semibold leading-normal text-white lg:text-black"
      onClick={(e: MouseEvent) => smoothScroll(e, data.logo.path)}
    >
      {data.logo.name}
    </a>
  );
};
