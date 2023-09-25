import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import FacilitiesLayout from '@/components/layouts/facilities';

export default function Bhojanalay() {
  return (
    <Page>
      <NextSeo title="Swarnoday Tirth" description="Swarnoday Tirth" />
      <FacilitiesLayout heading="Food Facilities at Swarnoday">
        <p>
          Swarnoday Tirth Nyas Committee has arranged all the neccessary and luxury facilities for any guest visiting
          the Eastern Group of Jain Temples. They are ready to serve the guest for the ultimate delight. They have
          arranged accomodation, food, etc. to facilitate a pleasant stay at the premises.
        </p>
      </FacilitiesLayout>
    </Page>
  );
}
