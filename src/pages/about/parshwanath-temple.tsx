import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import AboutLayout from '@/components/layouts/about';
import Image from 'next/image';

export default function ParasnathTemple() {
  return (
    <Page>
      <NextSeo title="Swarnoday Tirth" description="Swarnoday Tirth" />
      <AboutLayout heading="The Majestic Shri 1008 Parshwanath Temple">
        <Image
          src="/images/parshvanath-temple.jpg"
          width={100}
          height={100}
          className="w-2/4 h-auto rounded-md float-right mb-6 ml-6"
          alt="Shri 1008 Parshwanath Temple"
        />
        <p>
          The Parsvanath temple of Khajuraho, stands on a high and spacious jagati (Platform) and is a Panchayatan
          temple of Nagar style. While dealing with temple architecture the concept of Panchayatan is interpreted in two
          ways.
        </p>
        <p>
          Accordingto one interpretation, when four small subsidiary temples are erected on four corners of the Jagati
          of the main temple, which is in the centre, then this cluster of five temples is termed as a temple of
          Panchayatan type. According to the other interpretation, the temples of Panchayatan type are those, wherein
          are found the five essential compartments of a temple namely those of Jagmohan (Ardha-mandap), Mahamandap
          (hall having lateral trancepts with balconied (windows), An-tral (vestibule), Pradakshina-path
          (circumambulatory), and Garbha-graha (sanctum). The Parsvanath temple is a Panchayatan temple, in view of the
          presence of all the five essential organs of this type of temples.
        </p>
        <p>
          Another important feature of this temple is that it is oblong in plan with axil-projections on both the ends;
          that it contains on its western side a subsidiary Garbha-graha (sanc-tum) and a Jain Deity (Tirthankara) on
          the vedika heart, facing west, in spite of the fact that the main entrance-porch of the temple is in the east
          and is facing east. The gate of this western subsidiary sanctum is well decorated like that in the east (main
          sanctum) and contains many symbolic depictions. Both these portions of the temple are contemporary and appear
          to have been executed simultaneously. Although the general practice has been to have the face of the temple
          either towards north or east, yet there has been many exceptions to this general rule; and temples, facing
          west, have also been found. To quote a few examples, mention may be made of the Siva Temples of Mahson and
          Chandreha built by the Kalchuries. Such temples were built, probably in connection with certain Anusthans. The
          Vedika (Altar) facing west in Parsvanath temple at Khajuraho was so constructed either for the propitiation of
          Navagrahas (nine-planets) or in connection with some other Anusthan.
        </p>
        <Image
          src="/images/parasnath-idol.jpg"
          width={100}
          height={100}
          alt="Shri Parasnath Idol"
          className="w-1/3 h-auto rounded-md float-left mr-6"
        />
        <p>
          The mystery of the unfathomed and ever lasting beauty of this temple which enchants the visitors even froma
          distance, lies in the form and design of its eloquent Sikhars (spires). The Uru-Sringas and Karna-Sringas have
          increased this beauty still more. More than hundred Sikhars, high as well as low, seem to have been
          incorporated in the plan of this temple (plate 1).
        </p>
        <p>
          Above the central zone of the wall proper, rises the roof, consisting of a series of graded peaks that
          veritably resemble the mountain range of Kailash or Meru. These peaks, arrayed along the axial line, rise and
          fall alternately, while maintaining their upward ascent and culminate in the tallest tower (Sikhar) which is
          raised directly over the sanctum. In case of this tallest tower (Sikhar) with the increase in the height,
          there takes place corresponding decrease in the circumference thereof, with the result that it ultimately
          becomes quite small and serves the purpose of the seat for the Chakra (Circle) bearing Amalak and
          Patra-Kalash, i.e., the highest portion of the Sikhara. The temple of Parsvanath is assignable to the period
          between 950 to 970 A.D. during the early part of Dhanga&apos;s reign.
        </p>
      </AboutLayout>
    </Page>
  );
}
