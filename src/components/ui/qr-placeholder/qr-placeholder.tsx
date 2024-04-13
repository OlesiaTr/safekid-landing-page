import React, { FC } from 'react';
import Image from 'next/image';
import placeholderQR from '../../../../public/images/qr_placeholder.png';
import { Button } from '../button';

export interface Props {
  btnLabel: string;
  label: string;
}

export const QRPlaceholder: FC<Props> = ({ label, btnLabel }) => {
  return (
    <div className="   text-center   lg:min-w-[355px] xl:min-w-[495px]">
      <Button label={btnLabel} styles="md:mb-6 min-w-[350px] lg:w-full" />
      <Image
        src={placeholderQR}
        width={307}
        height={217}
        alt={label}
        className="m-auto mb-[18px] hidden md:block"
      />
      <p className="hidden text-2xl font-semibold leading-normal md:block">
        {label}
      </p>
    </div>
  );
};
