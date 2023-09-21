import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Page from '@/components/page';
import Header from '@/components/header';
import Main from '@/components/main';
import Section from '@/components/section';
import EmblaCarousel from '@/components/carousel';
import Image from 'next/image';

export default function Home() {
  const slides: string[] = [`/images/ghantai.webp`, `/images/museum.webp`, `/images/shantinathji.webp`];
  return (
    <Page>
      <NextSeo title="Swarnoday Tirth" description="Swarnoday Tirth" />
      <Header />
      <Main>
        <Section classNames={[`bg-white`]} heading="Timeless Monuments">
          <div className="flex max-w-7xl mx-auto gap-6 flex-col lg:flex-row">
            <div className="flex-[0_0_55%] flex gap-4 flex-col items-start">
              <p className="mb-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, aut! Odio hic, aliquam perferendis
                similique sint nesciunt eius dolores est quos nemo fugit suscipit minus iusto dicta consequuntur laborum
                consequatur.
              </p>
              <Link href="/about" className="bg-base inline-block px-4 py-2 text-white rounded-md">
                Know more
              </Link>
            </div>
            <div className="flex-[0_0_45%]">
              <EmblaCarousel slides={slides} imgClassNamesOverride="h-full lg:h-80 object-fill" />
            </div>
          </div>
        </Section>
        <Section classNames={[`bg-yellow-50`]} heading="Swarnoday Temple">
          <div className="flex max-w-7xl mx-auto gap-6 flex-col lg:flex-row">
            <div className="flex-[0_0_45%] relative">
              <Image
                src="/images/swarnoday-shilanyas.jpeg"
                alt="Swarnoday Temple Shilaynas"
                className="w-full h-80 object-fill"
                width={100}
                height={100}
              />
            </div>
            <div className="flex-[0_0_55%] flex gap-4 flex-col items-start">
              <p className="mb-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, aut! Odio hic, aliquam perferendis
                similique sint nesciunt eius dolores est quos nemo fugit suscipit minus iusto dicta consequuntur laborum
                consequatur.
              </p>
              <Link href="/about/swarnoday" className="bg-base inline-block px-4 py-2 text-white rounded-md">
                Know more
              </Link>
            </div>
          </div>
        </Section>
      </Main>
    </Page>
  );
}
