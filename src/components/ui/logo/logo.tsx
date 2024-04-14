import data from '@/data/header.json';

export const Logo = () => {
  return (
    <a
      href={data.logo.path}
      aria-label={data.logo.ariaLabel}
      className="text-[32px] font-semibold leading-normal"
    >
      {data.logo.name}
    </a>
  );
};
