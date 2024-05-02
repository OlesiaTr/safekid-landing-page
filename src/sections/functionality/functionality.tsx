'use client';
import { ImgPlaceholder, ListTitle, Title } from '@/components/ui';
import data from '@/data/functionality.json';
import { CheckIcon } from '@heroicons/react/24/outline';

import SectionImg from '../../../public/images/functionality_section_img-mob.png';
import { MouseEvent, useState } from 'react';
import { findSubstringIndices, smoothScroll } from '@/utils';

export const Functionality = () => {
  const [isClicked, setIsClicked] = useState(false);

  const onMoreDetailsClick = () => setIsClicked(!isClicked);

  // The index of the start and end of the bold substring in the Left Column
  const { startIndex: startColumnLeft, endIndex: endColumnLeft } =
    findSubstringIndices(
      data.leftColumnData.inMoreDetails.additionalInfo,
      'SafeKid',
    );

  const beforeBoldWord =
    data.leftColumnData.inMoreDetails.additionalInfo.substring(
      0,
      startColumnLeft,
    );
  const boldWord = data.leftColumnData.inMoreDetails.additionalInfo.substring(
    startColumnLeft,
    endColumnLeft,
  );
  const afterBoldWord =
    data.leftColumnData.inMoreDetails.additionalInfo.substring(endColumnLeft);

  // The index of the start and end of the bold substring in the Right Column
  const { startIndex: startIndexSecond, endIndex: endIndexSecond } =
    findSubstringIndices(
      data.rightColumnData.insertedLink.label,
      'новітні технології для підвищення безпеки власної сім’ї',
    );

  const beforeLink = data.rightColumnData.insertedLink.label.substring(
    0,
    startIndexSecond,
  );

  const boldLink = data.rightColumnData.insertedLink.label.substring(
    startIndexSecond,
    endIndexSecond,
  );

  return (
    <section className="section" id={data.id}>
      <Title title={data.title} />

      <div className=" mb-6 flex w-full flex-col justify-between gap-6 md:mb-20 lg:flex-row lg:gap-16 xl:mb-[120px] ">
        <div className="flex-1">
          <p className=" mb-6 md:text-lg xl:text-2xl ">
            {data.leftColumnData.label}
          </p>

          <ul className="list-decimal pl-6">
            <li className="mb-2 md:text-lg xl:text-2xl">
              {data.leftColumnData.leftColumnPts[0].label}
            </li>

            {isClicked ? (
              <li className="mb-2 md:text-lg xl:text-2xl">
                {data.leftColumnData.leftColumnPts[1].label}{' '}
                <p
                  className="mb-4 cursor-pointer select-none leading-normal text-blue underline transition md:text-lg xl:text-2xl "
                  onClick={onMoreDetailsClick}
                >
                  {data.leftColumnData.inMoreDetails.clickableToClose}
                </p>
                <p className="md:text-lg xl:text-2xl">
                  {beforeBoldWord}
                  <strong>{boldWord}</strong>
                  {afterBoldWord}
                </p>
              </li>
            ) : (
              <li className="mb-4 md:text-lg xl:text-2xl">
                {data.leftColumnData.leftColumnPts[1].label}{' '}
                <p
                  className="cursor-pointer select-none leading-normal text-blue underline transition md:text-lg xl:text-2xl "
                  onClick={onMoreDetailsClick}
                >
                  {data.leftColumnData.inMoreDetails.clickableToOpen}
                </p>
              </li>
            )}

            <li className="md:text-lg xl:text-2xl">
              {data.leftColumnData.leftColumnPts[2].label}
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <ListTitle title={data.rightColumnData.label} />
          {/* <List icon={true}>{data.rightColumnData.rightColumnPts}</List> */}
          <ul className="mt-2 pl-0">
            {data.rightColumnData.rightColumnPts.map((item, id) => (
              <li
                key={id}
                className="mb-2 flex items-center gap-2 md:text-lg xl:text-2xl"
              >
                <CheckIcon className="size-10 min-w-10  stroke-2 " />{' '}
                <p>{item.label}</p>
              </li>
            ))}
            <li className=" flex items-center gap-2 md:text-lg xl:text-2xl">
              <CheckIcon className="size-10 min-w-10  stroke-2 " />{' '}
              <p>
                {beforeLink}
                <a
                  href={data.rightColumnData.insertedLink.address}
                  onClick={(e: MouseEvent) =>
                    smoothScroll(e, data.rightColumnData.insertedLink.address)
                  }
                  className="text-blue underline"
                >
                  {boldLink}
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="m-auto w-full ">
        <ImgPlaceholder
          staticImg={SectionImg}
          imgAlt={data.imgAlt}
          imgMobSrc="/images/functionality_section_img-mob.png"
          imgTabSrc="/images/functionality_section_img-tab.png"
        />
      </div>
    </section>
  );
};
