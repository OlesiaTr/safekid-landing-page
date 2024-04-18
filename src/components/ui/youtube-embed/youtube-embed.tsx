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
        maxWidth: '700px',
        maxHeight: '490px',
      }}
      src={videoSrc}
      title={videoTitle}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
