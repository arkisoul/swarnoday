import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import Main from '@/components/main';
import Section from '@/components/section';

export default function Home() {
  return (
    <Page>
      <NextSeo title="Swarnoday Tirth" description="Swarnoday Tirth" />
      <Header />
      <Main>
        <Section heading="Timeless Monuments" />
      </Main>
    </Page>
  );
}
