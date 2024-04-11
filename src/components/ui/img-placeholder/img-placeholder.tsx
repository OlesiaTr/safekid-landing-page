import React, { FC } from 'react';
import Image from 'next/image';

import imagePlaceholderMob from '../../../../public/images/image_placeholder-mob.png';

export interface Props {
  imgAlt: string;
}

export const ImgPlaceholder: FC<Props> = ({ imgAlt }) => {
  return (
    <picture>
      <source
        media="(min-width: 768px)"
        srcSet="/images/image_placeholder-tab.png"
      />

      <source
        media="(min-width: 320px)"
        srcSet="/images/image_placeholder-mob.png"
      />

      <Image
        src={imagePlaceholderMob}
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
