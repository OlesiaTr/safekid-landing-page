import React, { FC } from 'react';

export interface Props {
  videoSrc: string;
  videoTitle: string;
}

export const YoutubeEmbed: FC<Props> = ({ videoSrc, videoTitle }) => {
  return (
    <iframe
      width="100%"
      height="auto"
      style={{
        objectFit: 'fill',
        minHeight: '400px',
        maxWidth: '1300px',
        maxHeight: '490px',
      }}
      src={videoSrc}
      title={videoTitle}
      referrerPolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};
