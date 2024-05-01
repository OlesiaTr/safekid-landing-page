import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

export interface Props {
  imgAlt: string;
  imgMobSrc: string;
  imgTabSrc: string;
  staticImg: StaticImageData;
}

export const ImgPlaceholder: FC<Props> = ({
  imgAlt,
  imgMobSrc,
  imgTabSrc,
  staticImg,
}) => {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={imgTabSrc} />

      <source media="(min-width: 320px)" srcSet={imgMobSrc} />

      <Image
        src={staticImg}
        alt={imgAlt}
        style={{
          objectFit: 'fill',
          width: '100%',
          height: 'auto',
          maxHeight: '620px',
        }}
        loading="lazy"
      />
    </picture>
  );
};
