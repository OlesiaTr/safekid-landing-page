import React, { FC } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export interface Props {
  ariaLabel: string;
  onClick: () => void;
  isOpen: boolean;
}

export const MenuBtn: FC<Props> = ({ ariaLabel, onClick, isOpen }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="text-white transition lg:hidden"
    >
      {isOpen ? (
        <XMarkIcon className="size-8" />
      ) : (
        <Bars3Icon className="size-8" />
      )}
    </button>
  );
};
