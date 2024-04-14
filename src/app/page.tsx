'use client';

import { ScrollToTopBtn } from '@/components/ui';
import { description } from '@/constants';
import {
  AboutUs,
  Description,
  DownloadApp,
  FAQ,
  Footer,
  Functionality,
  Header,
  Hero,
  Relevance,
} from '@/sections';

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Relevance />

      <Description />

      <Functionality />

      <AboutUs />

      <DownloadApp />

      <FAQ />

      <Footer />

      <ScrollToTopBtn sectionIdStart={description} />
    </>
  );
}
