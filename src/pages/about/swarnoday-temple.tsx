import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import AboutLayout from '@/components/layouts/about';

export default function SwarnodayTemple() {
  return (
    <Page>
      <NextSeo title="Swarnoday Tirth" description="Swarnoday Tirth" />
      <AboutLayout heading="Shri Swarnoday Temple">
        <p>Coming soon</p>
      </AboutLayout>
    </Page>
  );
}
