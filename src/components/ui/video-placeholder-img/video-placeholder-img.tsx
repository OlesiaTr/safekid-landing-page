import React, { FC } from 'react';
import Image from 'next/image';

import videoPlaceholderMob from '../../../../public/images/video_placeholder-mob.png';

export interface Props {
  videoAlt: string;
}

export const VideoPlaceholderImg: FC<Props> = ({ videoAlt }) => {
  return (
    <picture>
      <source
        media="(min-width: 768px)"
        srcSet="/images/video_placeholder-tab.png"
      />

      <source
        media="(min-width: 320px)"
        srcSet="/images/video_placeholder-mob.png"
      />

      <Image
        src={videoPlaceholderMob}
        alt={videoAlt}
        style={{
          objectFit: 'fill',
          width: '100%',
          height: 'auto',
          maxWidth: '700px',
          maxHeight: '490px',
        }}
        loading="lazy"
      />
    </picture>
  );
};
