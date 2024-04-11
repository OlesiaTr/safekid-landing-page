import { List, Title, VideoPlaceholderImg } from '@/components/ui';
import data from '@/data/relevance.json';

export const Relevance = () => {
  return (
    <section className="section " id={data.id}>
      <div className="mb-6 flex flex-col gap-10 md:mb-10 md:flex-row md:gap-16">
        <div className="m-auto md:w-[700px] md:flex-1 ">
          <VideoPlaceholderImg videoAlt={data.videoAlt} />
        </div>

        <div className="  self-start md:flex-1 ">
          <Title title={data.title} />
          <List styles="list-disc list-inside">{data.relevanceFacts}</List>
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
    </section>
  );
};
