import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import FacilitiesLayout from '@/components/layouts/facilities';

export default function Facilities() {
  return (
    <Page>
      <NextSeo title="Swarnoday Tirth" description="Swarnoday Tirth" />
      <FacilitiesLayout heading="Facilities at Swarnoday">
        <p>
          Swarnoday Tirth Nyas Committee has arranged all the neccessary and luxury facilities for any guest visiting
          the Eastern Group of Jain Temples. They are ready to serve the guest for the ultimate delight. They have
          arranged accomodation, food, etc. to facilitate a pleasant stay at the premises.
        </p>
        <h2 className="font-sans font-bold text-lg not-italic">Pahil Niketan</h2>
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
        <h2 className="font-sans font-bold text-lg not-italic">Bhojnalay</h2>
        <p>
          The Swarnoday Tirth Nyas Committee also arranged food facilities within the premises. Visitors can book for
          food in advance by contacting the committee members. The food can also be arranged on arrival at the request
          of the visitors. The in house bhojnalay serves satvik yet delicious food to all the guests.
        </p>
      </FacilitiesLayout>
    </Page>
  );
}
