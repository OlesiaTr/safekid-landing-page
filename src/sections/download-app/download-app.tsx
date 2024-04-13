import { QRPlaceholder, Title } from '@/components/ui';
import data from '@/data/download-app.json';

export interface Props {}

export const DownloadApp = () => {
  return (
    <section className="section gap-8" id={data.id}>
      <Title title={data.title} />

      <div className="flex flex-col items-center gap-4 md:gap-8 lg:flex-row lg:justify-around lg:gap-0">
        <QRPlaceholder
          label={data.mobileQR.labelAndroid}
          btnLabel={data.mobileBtn.labelAndroid}
        />

        <QRPlaceholder
          label={data.mobileQR.labelIOS}
          btnLabel={data.mobileBtn.labelIOS}
        />
      </div>
    </section>
  );
};
