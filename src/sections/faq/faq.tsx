'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Title } from '@/components/ui';

import data from '@/data/faq.json';
import clsx from 'clsx';

export const FAQ = () => {
  const [active, setActive] = useState<null | number>(null);

  const toggleActive = (id: number) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="section" id={data.id}>
      <Title title={data.title} />

      <ul className=" flex flex-col gap-2 md:gap-4 ">
        {data.questionData.map((item, id) => (
          <li
            key={id}
            onClick={() => toggleActive(id)}
            className={clsx(
              ' cursor-pointer transition',
              active === id && 'active',
            )}
          >
            <div className="flex items-baseline ">
              <ChevronDownIcon
                className={clsx(
                  'size-6 min-w-6 transition',
                  active === id && 'rotate-180',
                )}
              />
              <p className="ml-2 text-xl font-semibold leading-normal md:text-2xl xl:text-3xl">
                {item.question}
              </p>
            </div>

            {active === id && (
              <p className="ml-8 leading-normal md:text-lg xl:text-2xl">
                {item.answer}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
