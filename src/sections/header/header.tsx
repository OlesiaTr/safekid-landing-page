'use client';
import { MobileMenu } from '@/components/base';
import { Logo, MenuBtn, Navigation } from '@/components/ui';
import data from '@/data/header.json';

import React, { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <header className="m-auto max-w-screen-xl bg-neutral-500 lg:bg-neutral-300">
      <div className="flex items-center justify-between px-4 md:px-[72px]">
        <Logo />

        <Navigation location="header" links={data.navLinks} />

        <MenuBtn
          ariaLabel={data.mobileMenu.openBtnAriaLabel}
          onClick={toggleModal}
          isOpen={isOpen}
        />
      </div>

      {isOpen && <MobileMenu closeModal={setIsOpen} />}
    </header>
  );
};
