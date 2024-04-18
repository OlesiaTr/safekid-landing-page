'use client';

import { List, Title, YoutubeEmbed } from '@/components/ui';
import data from '@/data/relevance.json';
import { useState } from 'react';

export const Relevance = () => {
  const [isClicked, setIsClicked] = useState(false);

  const onMoreDetailsClick = () => setIsClicked(!isClicked);

  return (
    <section className="section " id={data.id}>
      <div className="mb-6 flex flex-col gap-10 md:mb-10 md:flex-row md:gap-16">
        <div className="md:w-[700px] md:flex-1 ">
          <YoutubeEmbed videoSrc={data.videoSrc} videoTitle={data.videoTitle} />
        </div>

        <div className="  self-start md:flex-1 ">
          <Title title={data.title} />
          <List styles="list-disc">{data.relevanceFacts}</List>
        </div>
      </div>

      {data.relevancePts.map((item, id) => (
        <span
          key={id}
          className="leading-normal odd:font-semibold md:text-lg xl:text-2xl "
        >
          {item.label}
        </span>
      ))}

      {isClicked ? (
        <ul>
          {data.inMoreDetails.additionalInfo.map(({ text }, id) => (
            <li
              key={id}
              className="indent-4 leading-normal md:text-lg xl:text-2xl "
            >
              {text}
            </li>
          ))}
        </ul>
      ) : (
        <p
          className="cursor-pointer select-none leading-normal text-neutral-400 underline transition md:text-lg xl:text-2xl "
          onClick={onMoreDetailsClick}
        >
          {data.inMoreDetails.clickable}
        </p>
      )}
    </section>
  );
};
