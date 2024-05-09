import { YoutubeEmbed } from '@/components/ui';

import data from '@/data/about-us.json';

export const AboutUs = () => {
  return (
    <section className="section" id={data.id}>
      <div className="w-full ">
        <YoutubeEmbed videoSrc={data.videoSrc} videoTitle={data.videoTitle} />
      </div>
    </section>
  );
};
