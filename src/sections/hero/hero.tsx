import { Button } from '@/components/ui';
import data from '@/data/hero.json';

export const Hero = () => {
  return (
    <section className="section mb-10 bg-neutral-300 pb-[236px] pt-36 md:mb-20">
      <div className="max-w-[930px] ">
        <h1 className="mb-2 text-2xl font-semibold leading-normal md:text-4xl xl:text-5xl">
          {data.title}
        </h1>

        <p className="mb-8 leading-normal md:text-xl xl:text-2xl">
          {data.label}
        </p>
      </div>

      <div className="hidden md:block">
        <Button label={data.desktopBtn.label} />
      </div>

      <div className=" m-auto flex min-w-72 max-w-[350px] flex-col gap-4 md:hidden">
        <Button label={data.mobileBtn.labelAndroid} styles="w-full" />
        <Button label={data.mobileBtn.labelIOS} styles="w-full" />
      </div>
    </section>
  );
};
