import { Button, List, ListTitle, Title } from '@/components/ui';
import data from '@/data/description.json';
import { smoothScroll } from '@/utils';
import { MouseEvent } from 'react';

export const Description = () => {
  return (
    <section className="section items-start " id={data.id}>
      <Title title={data.title} />

      <div className="mb-8 flex w-full flex-col justify-between gap-6 lg:flex-row lg:gap-16">
        <div className="flex-1">
          <ListTitle title={data.leftColumnData.label} />
          <List styles="list-disc">{data.leftColumnData.leftColumnPts}</List>
        </div>
        <div className="flex-1">
          <ListTitle title={data.rightColumnData.label} />
          <List styles="list-disc">{data.rightColumnData.rightColumnPts}</List>
        </div>
      </div>

      <Button
        label={data.desktopBtn.label}
        styles="text-white m-auto md:!ml-0"
        onClick={(e: MouseEvent) => smoothScroll(e, data.linkToDownload)}
      />
    </section>
  );
};
