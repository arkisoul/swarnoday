import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import ContactLayout from '@/components/layouts/contact';

export default function Contact() {
  return (
    <Page>
      <NextSeo title="Swarnoday Tirth" description="Swarnoday Tirth" />
      <ContactLayout heading="Contact us">
        <p>
          Swarnoday Tirth Kshetra is part of the Khajuraho&apos;s Eastern Group of Temples. Khajuraho is well connected
          with other parts of the country via rich road network. Visitors can also reach to Khajuraho via rail or air.
        </p>
        <ul className="flex flex-col gap-2 list-disc">
          <li>
            Khajuraho is ~50km far from Chhatarpur district of Madhya Pradesh. People coming from Delhi via Jhansi could
            take the Jhansi Panna Highway till Bamitha. From Bamitha it is approx 12km internal road connecting to
            Khajuraho.
          </li>
          <li>
            Khajuraho is connected via railway line as well. The railway station is approx 7km from Easter group of
            Temples. Once dropping at Khajuraho railway station one can easily find a auto or a taxi that will drop them
            at Swarnoday Tirth.
          </li>
          <li>
            Khajuraho also has a Domestic Airport which is connected with Delhi. People can also find some connecting
            flights from other major cities like Mumbai, Hyderabad, etc to Khajuraho via Delhi.
          </li>
        </ul>
        <h2 className="font-sans font-bold text-lg not-italic">Locate us via Map</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7240.896532465173!2d79.92400579295234!3d24.848535097358106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3982e5e17b3d27a9%3A0x841e0ad6ab12d753!2z4KS44KWN4KS14KSw4KWN4KSj4KWL4KSm4KSvIOCkpOClgOCksOCljeCkpSDgpJXgpY3gpLfgpYfgpKTgpY3gpLAg4KSW4KSc4KWB4KSw4KS-4KS54KWL!5e0!3m2!1sen!2sin!4v1695633736507!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
          title="Swarnoday Tirth Kshetra Khajuraho"
        />
        <h2 className="font-sans font-bold text-lg not-italic">Reach out to us</h2>
        <ul className="flex flex-col gap-2 list-disc">
          <li>
            <strong>Office:</strong>+91 97527 98223, +91 96859 42357
          </li>
        </ul>
      </ContactLayout>
    </Page>
  );
}
