import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Main from '@/components/main';

export default function Home() {
  return (
    <Page>
      <NextSeo title="Swarnoday Tirth" description="Swarnoday Tirth" />
      <Main>About page</Main>
    </Page>
  );
}
