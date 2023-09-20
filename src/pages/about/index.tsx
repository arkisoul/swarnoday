import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Main from '@/components/main';
import Affix from '@/components/affix';
import { AboutLinks } from '@/constants/routes';

export default function About() {
  return (
    <Page>
      <NextSeo title="Swarnoday Tirth" description="Swarnoday Tirth" />
      <Main>
        <div className="flex max-w-7xl mx-auto">
          <div className="content flex-1" />
          <div className="sidebar flex-[0_0_20%]">
            <Affix links={AboutLinks} />
          </div>
        </div>
      </Main>
    </Page>
  );
}