import { ImgPlaceholder, List, ListTitle, Title } from '@/components/ui';
import data from '@/data/functionality.json';

export const Functionality = () => {
  return (
    <section className="section" id={data.id}>
      <Title title={data.title} />

      <div className=" mb-6 flex w-full flex-col justify-between gap-6 md:mb-20 lg:flex-row lg:gap-16 xl:mb-[120px] ">
        <div className="flex-1">
          <p className=" md:text-lg xl:text-2xl ">
            {data.leftColumnData.label}
          </p>
          <List styles="list-decimal">{data.leftColumnData.leftColumnPts}</List>
        </div>

        <div className="flex-1">
          <ListTitle title={data.rightColumnData.label} />
          <List icon={true}>{data.rightColumnData.rightColumnPts}</List>
        </div>
      </div>

      <div className="m-auto w-full ">
        <ImgPlaceholder imgAlt={data.imgAlt} />
      </div>
    </section>
  );
};
