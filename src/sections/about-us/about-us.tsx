import Image from 'next/image';
import { Title } from '@/components/ui';

import data from '@/data/about-us.json';
import videoPlaceholderMob from '../../../public/images/video_placeholder-mob.png';

export const AboutUs = () => {
  return (
    <section className="section md:flex-row " id={data.id}>
      <div className="  self-start md:flex-1 ">
        <Title title={data.title} />

        <p className="leading-normal md:text-lg xl:text-2xl ">{data.label}</p>
      </div>

      <div className="md:w-[700px] md:flex-1 ">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/video_placeholder-tab.png"
          />

          <source
            media="(min-width: 320px)"
            srcSet="/images/video_placeholder-mob.png"
          />

          <Image
            src={videoPlaceholderMob}
            alt={data.videoAlt}
            style={{
              objectFit: 'fill',
              width: '100%',
              height: 'auto',
              maxWidth: '700px',
              maxHeight: '490px',
            }}
            loading="lazy"
          />
        </picture>
      </div>
    </section>
  );
};
