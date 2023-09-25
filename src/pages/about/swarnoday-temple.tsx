import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Page from '@/components/page';
import AboutLayout from '@/components/layouts/about';

const gallery = [
  `/images/swarnoday_1.jpg`,
  `/images/swarnoday_2.jpg`,
  `/images/swarnoday_3.jpg`,
  `/images/swarnoday_4.jpg`,
  `/images/swarnoday_5.jpg`,
  `/images/swarnoday_6.jpg`,
  `/images/swarnoday_7.jpg`,
  `/images/swarnoday_8.jpg`,
  `/images/swarnoday_9.jpg`,
  `/images/swarnoday_10.jpg`,
  `/images/swarnoday_11.jpg`,
];

export default function SwarnodayTemple() {
  return (
    <Page>
      <NextSeo title="Swarnoday Tirth" description="Swarnoday Tirth" />
      <AboutLayout heading="Shri Swarnoday Temple">
        <p>
          Khajuraho is known for his sculpulters and artisary skills. A lot of great monuments were build during the
          Chanedla&apos;s rule. Khajuraho carriers a religios vibes. To continue this architectural marvel history, the
          greatest sant of this era Aacharya Shri 108 Vidyasagarji Mahamuniraj envisioned two majestic temple for this
          holy place. Aacharya Shriji announced to create two marvelous temples a) Sarnoday Jinalay b) Shashtrakut
          Jinalay
        </p>
        <p className="font-bold font-sans font-lg not-italic">Some glimse of the inaugration ceremony</p>
        <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {gallery.map((img) => (
            <Image
              key={img}
              src={img}
              alt="Swarnoday Jinalay"
              width={100}
              height={100}
              className="w-full h-auto rounded-md"
            />
          ))}
        </div>
      </AboutLayout>
    </Page>
  );
}
