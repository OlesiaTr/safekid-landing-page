'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Title } from '@/components/ui';

import data from '@/data/faq.json';
import clsx from 'clsx';

export const FAQ = () => {
  const [active, setActive] = useState<null | number>(null);
  const [isClicked, setIsClicked] = useState(false);

  const onMoreDetailsClick = () => setIsClicked(!isClicked);

  const toggleActive = (id: number) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="section" id={data.id}>
      <Title title={data.title} />

      <ul className=" flex flex-col gap-2 md:gap-4 ">
        {data.questionData.slice(0, 5).map(item => (
          <li
            key={item.id}
            onClick={() => toggleActive(+item.id)}
            className={clsx(
              ' cursor-pointer transition',
              active === +item.id && 'active',
            )}
          >
            <div className="flex items-baseline ">
              <ChevronDownIcon
                className={clsx(
                  'size-6 min-w-6 transition',
                  active === +item.id && 'rotate-180',
                )}
              />
              <p className="ml-2 text-xl font-semibold leading-normal md:text-2xl xl:text-3xl">
                {item.question}
              </p>
            </div>

            {active === +item.id && (
              <p className="ml-8 leading-normal md:text-lg xl:text-2xl">
                {item.answer}
              </p>
            )}
          </li>
        ))}

        {isClicked ? (
          <>
            <span
              className="cursor-pointer select-none leading-normal text-blue underline transition md:text-lg xl:text-2xl "
              onClick={onMoreDetailsClick}
            >
              {data.inMoreDetails.clickableToClose}
            </span>
            {data.questionData.slice(5).map(item => (
              <li
                key={item.id}
                onClick={() => toggleActive(+item.id)}
                className={clsx(
                  ' cursor-pointer transition',
                  active === +item.id && 'active',
                )}
              >
                <div className="flex items-baseline ">
                  <ChevronDownIcon
                    className={clsx(
                      'size-6 min-w-6 transition',
                      active === +item.id && 'rotate-180',
                    )}
                  />
                  <p className="ml-2 text-xl font-semibold leading-normal md:text-2xl xl:text-3xl">
                    {item.question}
                  </p>
                </div>

                {active === +item.id && (
                  <p className="ml-8 leading-normal md:text-lg xl:text-2xl">
                    {item.answer}
                  </p>
                )}
              </li>
            ))}
          </>
        ) : (
          <span
            className="cursor-pointer select-none leading-normal text-blue underline transition md:text-lg xl:text-2xl "
            onClick={onMoreDetailsClick}
          >
            {data.inMoreDetails.clickableToOpen}
          </span>
        )}
      </ul>
    </section>
  );
};
