import { Title, VideoPlaceholderImg } from '@/components/ui';

import data from '@/data/about-us.json';

export const AboutUs = () => {
  return (
    <section className="section gap-16 md:flex-row " id={data.id}>
      <div className="  self-start md:flex-1 ">
        <Title title={data.title} />

        <p className="leading-normal md:text-lg xl:text-2xl ">{data.label}</p>
      </div>

      <div className="m-auto md:w-[700px] md:flex-1 ">
        <VideoPlaceholderImg videoAlt={data.videoAlt} />
      </div>
    </section>
  );
};
