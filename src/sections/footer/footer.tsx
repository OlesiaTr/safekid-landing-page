import data from '@/data/footer.json';

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 bg-accent py-4 md:py-8 xl:gap-10 xl:py-[60px]  ">
      <div className="flex gap-9 text-sm text-white xl:gap-[72px] xl:text-xl">
        <p className="hidden md:block ">
          {data.devs.label}&nbsp;
          {data.devs.creators.map(creator => (
            <a
              key={creator.label}
              href={creator.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <span>{creator.label}</span>
            </a>
          ))}
        </p>
        <p className="flex gap-4 xl:gap-6">
          <a
            href={data.contactInfo.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {data.contactInfo.label}
          </a>
          <a
            href={data.policy.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {data.policy.label}
          </a>
        </p>
      </div>
      <span className="hidden text-sm text-white md:block md:text-base">
        {data.copyrights.label}
      </span>
      <p className="max-w-[380px] text-center text-sm text-white md:hidden ">
        {data.devs.label}&nbsp;
        {data.devs.creators.map(creator => (
          <a
            key={creator.label}
            href={creator.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <span>{creator.label}</span>
          </a>
        ))}
      </p>
    </footer>
  );
};
