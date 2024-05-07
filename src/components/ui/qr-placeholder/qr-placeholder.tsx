import React, { FC } from 'react';
import Image from 'next/image';
import placeholderQR from '../../../../public/images/qr_placeholder.png';
import { Button } from '../button';

export interface Props {
  btnLabel: string;
}

export const QRPlaceholder: FC<Props> = ({ btnLabel }) => {
  return (
    <div className="   text-center text-white   lg:min-w-[355px] xl:min-w-[495px]">
      <Button label={btnLabel} styles="md:mb-6 min-w-[290px] lg:w-full" />
      <Image
        src={placeholderQR}
        width={307}
        height={217}
        alt={btnLabel}
        className="m-auto mb-[18px] hidden md:block"
      />
    </div>
  );
};
