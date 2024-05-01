'use client';
import { MobileMenu } from '@/components/base';
import { Logo, MenuBtn, Navigation } from '@/components/ui';
import data from '@/data/header.json';

import React, { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <header className=" relative bg-accent lg:absolute lg:inset-x-0 lg:top-0 lg:w-full lg:bg-transparent">
      <div className="flex items-center justify-between px-4 lg:px-[56px] xl:px-[72px] xxl:justify-center xxl:gap-24 ">
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
