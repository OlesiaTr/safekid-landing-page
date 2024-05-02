'use client';

import { MouseEvent, useState } from 'react';
import { ImgPlaceholder, List, Title } from '@/components/ui';
import data from '@/data/relevance.json';
import { findSubstringIndices, smoothScroll } from '@/utils';

import SectionImg from '../../../public/images/relevance_section_img-mob.jpg';

export const Relevance = () => {
  const [isClicked, setIsClicked] = useState(false);

  const onMoreDetailsClick = () => setIsClicked(!isClicked);

  // The index of the start and end of the link substring
  const { startIndex: startLink, endIndex: endLink } = findSubstringIndices(
    data.insertedLink.label,
    'додаток SafeKid.',
  );

  const beforeLink = data.insertedLink.label.substring(0, startLink);
  const boldLink = data.insertedLink.label.substring(startLink, endLink);

  // The index of the start and end of the first substring
  const { startIndex: startIndexFirst, endIndex: endIndexFirst } =
    findSubstringIndices(
      data.inMoreDetails.additionalInfo[0].text,
      'Додаток SafeKid',
    );

  // The index of the start and end of the second substring
  const { startIndex: startIndexSecond, endIndex: endIndexSecond } =
    findSubstringIndices(
      data.inMoreDetails.additionalInfo[1].text,
      'підвищуйте безпеку своєї дитини!',
    );

  // Split the text into four substrings
  const boldFirst = data.inMoreDetails.additionalInfo[0].text.substring(
    startIndexFirst,
    endIndexFirst,
  );

  const afterFirst =
    data.inMoreDetails.additionalInfo[0].text.substring(endIndexFirst);

  const beforeSecond = data.inMoreDetails.additionalInfo[1].text.substring(
    0,
    startIndexSecond,
  );

  const boldSecond = data.inMoreDetails.additionalInfo[1].text.substring(
    startIndexSecond,
    endIndexSecond,
  );

  return (
    <section className="section " id={data.id}>
      <div className="mb-6 flex flex-col gap-10 md:mb-10 md:flex-row md:gap-16 lg:gap-[135px]">
        <div className="md:w-[700px] md:flex-1 ">
          <ImgPlaceholder
            staticImg={SectionImg}
            imgAlt={data.imgAlt}
            imgMobSrc="/images/relevance_section_img-mob.jpg"
            imgTabSrc="/images/relevance_section_img-tab.jpg"
          />
        </div>

        <div className="  self-start md:max-w-[525px] md:flex-1 ">
          <Title title={data.title} />
          <List styles="list-disc">{data.relevanceFacts}</List>
        </div>
      </div>

      {data.relevancePts.map((item, id) => (
        <p
          key={id}
          className="mb-6 leading-normal odd:font-semibold md:text-lg xl:text-2xl "
        >
          {item.label}
        </p>
      ))}

      <p className="mb-2 leading-normal odd:font-semibold md:text-lg xl:text-2xl ">
        {beforeLink}
        <a
          href={data.insertedLink.address}
          onClick={(e: MouseEvent) =>
            smoothScroll(e, data.insertedLink.address)
          }
          className="text-blue"
        >
          {boldLink}
        </a>
      </p>

      {isClicked ? (
        <>
          <span
            className="mb-4 cursor-pointer select-none leading-normal text-blue underline transition md:text-lg xl:text-2xl "
            onClick={onMoreDetailsClick}
          >
            {data.inMoreDetails.clickableToClose}
          </span>
          <div className="mb-6">
            <p className=" leading-normal md:text-lg xl:text-2xl ">
              <strong>{boldFirst}</strong>
              {afterFirst}
            </p>
            <p className=" leading-normal md:text-lg xl:text-2xl ">
              {beforeSecond}
              <strong>{boldSecond}</strong>
            </p>
          </div>
          <p className="italic leading-normal md:text-lg xl:text-2xl">
            {data.inMoreDetails.informationSource}
          </p>
        </>
      ) : (
        <span
          className="cursor-pointer select-none leading-normal text-blue underline transition md:text-lg xl:text-2xl "
          onClick={onMoreDetailsClick}
        >
          {data.inMoreDetails.clickableToOpen}
        </span>
      )}
    </section>
  );
};
