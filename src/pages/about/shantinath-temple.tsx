import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import AboutLayout from '@/components/layouts/about';
import Image from 'next/image';

export default function ShantinathTemple() {
  return (
    <Page>
      <NextSeo title="Swarnoday Tirth" description="Swarnoday Tirth" />
      <AboutLayout heading="Shri 1008 Shantinath Temple">
        <Image
          src="/images/shantinath-jinalay.jpg"
          alt="Shri Shantinath Jinalay"
          width={100}
          height={100}
          className="w-full h-auto rounded-md block"
        />
        <p>
          This temple was reconstructed near about one hundred years ago, with the help of the remains of certain old
          and ruined Jain Temples. The temple is dedicated to Lord Santinath, whose 14 feet high majestic statue, (which
          is the tallest of all the deity-figures, found in the temples of Khajuraho), with expressions of
          transcendental calm and eternal bliss on the face has been installed herein the sanctum. The statue appears to
          bewell polished and it shines with glossy lustre, on the pedastal thereof a small image of deer has been
          carved out signifying it to be that of Lord Santinath. It also contains a one line inscription of Vikram
          Samvat 1085 (1028 A.D.), although at present, it is normally invisible, much of it having been covered with
          plaster.
        </p>
        <p>
          The devotee, when the enters the temple, straightway goes to this sanctum, pays his respects and prays before
          the deity. The temple contains, at present, seventeen vedikas (altars), of which three e.g. 1,11 and 14 are
          old and must have formed part of some medieval old Jain temples. Along these three vedikas, are displayed the
          Janghas (wall-portions of the temple) and Garbha-graha (sanctum). These are all in their original form and are
          well preserved. It so appears as if the three old temples, after some additions and alternation in the upper
          portion thereof have been included in this temples, of Santinath and made essential parts thereof. In the rest
          of the fourteen vedikas as well as their gates, here and there, the remains of old and ruined Jain temples
          have been incorporated, which remind visitors of the glories, which once upon a time, these temples
          represented.
        </p>
        <Image
          src="/images/shantinath-idol.jpg"
          alt="Shri Shantinathjib Idol"
          width={100}
          height={100}
          className="w-2/4 h-auto rounded-md float-right ml-6"
        />
        <p>
          In the main sanctum, in addition to the image of Lord Santinath (Vedika-1), there are many Tirthankar images
          of great importance. The parikara is exquistely carved with two statues of Lord Parsvanath in standing posture
          and ten statues of other Tirthankaras in sitting posture. Adjacent to these sitting Tirthankar figures there
          are on both sides, small standing tirthankara figures as well. By the sides of the legs of Lord Santinath, two
          Indras named Sanatkumar and Mahendra have been depicted with chamars (fly whisks) in their hands.
        </p>
        <p>
          In this sanctum, there is comparatively a small figure of Lord Parsvanatha, in sitting posture. The artistic
          formation of the serpent with its beautiful hood has been really much noteworthy, as there is much of
          sculptural beauty in it. Some what above this statue of Lord Parsvanath, there is one Anusthan-vigraha of Lord
          Adinath; in the seat (pedastal) whereof Navgrahas (nine planets) have been depicted. It so seems, that as
          there is prevalent at present, a practice of creating special Mandana or Map-designs on cloth with colours for
          the purpose of special worship or Vidhana-Anusthan; similarly in old days also, the practice of creating
          special statues or temples in connection with special worship was prevalent. The statue of Parsvanath temple
          on the Upa-vedika (subsidiary-shrine) facing the west and these statues of this temple along with image of
          Nava-graha (nine planets) lend support to this hypothesis of ours.
        </p>
      </AboutLayout>
    </Page>
  );
}
