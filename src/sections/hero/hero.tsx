import { Button } from '@/components/ui';
import data from '@/data/hero.json';

export const Hero = () => {
  // The index of the start and end of the first substring
  const firstSubstring = 'запобігання викрадення дітей';
  const startIndexFirst = data.label.indexOf(firstSubstring);
  const endIndexFirst = startIndexFirst + firstSubstring.length;

  // The index of the start and end of the second substring
  const secondSubstring = 'завдання їм шкоди';
  const startIndexSecond = data.label.indexOf(secondSubstring);
  const endIndexSecond = startIndexSecond + secondSubstring.length;

  // Split the text into four substrings
  const beforeFirst = data.label.substring(0, startIndexFirst);
  const boldFirst = data.label.substring(startIndexFirst, endIndexFirst);
  const between = data.label.substring(endIndexFirst, startIndexSecond);
  const boldSecond = data.label.substring(startIndexSecond, endIndexSecond);
  const afterSecond = data.label.substring(endIndexSecond);

  return (
    <section className="section hero mb-10 bg-neutral-300 pb-[236px] pt-36 md:mb-20 md:px-[60px] xl:pb-[205px] xl:pt-[200px]">
      <div className="max-w-[770px] ">
        <h1 className="mb-2 text-2xl font-semibold leading-normal md:text-4xl xl:text-5xl xl:leading-snug">
          {data.title}
        </h1>

        <p className="mb-8 leading-normal md:text-xl xl:text-2xl">
          {beforeFirst}
          <b>{boldFirst}</b>
          {between}
          <b>{boldSecond}</b>
          {afterSecond}
        </p>
      </div>

      <div className="hidden md:block">
        <Button
          label={data.desktopBtn.label}
          styles="bg-white bg-opacity-30 border-[3px] border-blue text-blue text-[32px]"
        />
      </div>

      <div className=" m-auto flex min-w-72 max-w-[350px] flex-col gap-4 md:hidden">
        <Button
          label={data.mobileBtn.labelAndroid}
          styles="w-full text-white "
        />
        <Button label={data.mobileBtn.labelIOS} styles="w-full text-white" />
      </div>
    </section>
  );
};
