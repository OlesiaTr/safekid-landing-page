import { MouseEvent } from 'react';

export const smoothScroll = (e: MouseEvent, href?: string | undefined) => {
  e.preventDefault();

  let elem: HTMLElement | null = null;

  if (href) {
    elem = document.getElementById(href);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
