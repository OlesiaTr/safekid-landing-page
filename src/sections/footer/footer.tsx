import data from '@/data/footer.json';

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 bg-neutral-300 py-4 md:py-8 xl:gap-10 xl:py-[60px]  ">
      <div className="flex gap-9 text-sm xl:gap-[72px] xl:text-xl">
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
      <span className="text-sm text-neutral-400 md:text-base">
        {data.copyrights.label}
      </span>
    </footer>
  );
};
