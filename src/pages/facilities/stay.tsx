import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import FacilitiesLayout from '@/components/layouts/facilities';

export default function Stay() {
  return (
    <Page>
      <NextSeo title="Swarnoday Tirth" description="Swarnoday Tirth" />
      <FacilitiesLayout heading="Accomodation Facilities at Swarnoday">
        <p>
          For all the guests visiting Eastern group of Jain Temples also known as Swarnoday Tirth now, there is a well
          structured feature rich accomodation available within the temple premise. The{` `}
          <strong>
            <em>Pahil Niketan</em>
          </strong>
          {` `}
          established a long ago to facilitate lodging and accomodation facility to the visitors. It consistently go
          through upgradation to match modern expectations. One can book rooms here on call or uplon their arrival to
          the premise by contacting the committee members. The rooms will be allotted depending on the availability at
          the time.
        </p>
      </FacilitiesLayout>
    </Page>
  );
}
