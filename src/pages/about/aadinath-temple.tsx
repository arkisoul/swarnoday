import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import AboutLayout from '@/components/layouts/about';
import Image from 'next/image';

export default function AdinathTemple() {
  return (
    <Page>
      <NextSeo title="Swarnoday Tirth" description="Swarnoday Tirth" />
      <AboutLayout heading="The Majestic Shri 1008 Aadinath Temple">
        <p>
          The temple of Adinath stands close to and to the north of the Parsvanath. It is small Nirandhar prasad, of
          which only the Antarala and the Garbha-graha survive. The sanctum enshrnies not the original but a much later
          image of the first Jain Tirthankar namely Lord Adinath.
        </p>
        <Image
          src="/images/adinath-temple.jpg"
          width={100}
          height={100}
          className="w-2/4 h-auto rounded-md float-left mr-6 pb-6 mt-6"
          alt="Shri 1008 Adinath Temple"
        />
        <p>
          The high, straightand simple Sikhar (spire) with an elegantand graceful Kalasha (auspicious pitcher) on the
          peak. Unlike ihe Sikhar of Parsvanath temple, this sikhar does not contain Un. Sringas or Karna-Sringas and
          starts straight way from the fa. cades of Griva of the temple. It may be well compared with any of the
          invincible peaks of the sacred Mount Kailash, which had the priviledge of being the seat of Lord&apos;s
          Salvation. This spire reminds the visitor of the temples of Konark and Bhuvaneshwara-type. It proves that
          simplicity and homogenity, when displayed properly are not monotonous; they have got their own importance as
          they attract people by their naturalness. The Suchi-chakra, Amalak and the Kumbha Kalash, the highest portion
          of the spire, have been no doubt extremely charming and they are definitely superior to and more attractive
          than those of the Parsvanath temple.
        </p>
        <p>
          The entrance gate of this temple exists in its original form; with all its sculptural efflorescene. On sides
          thereof, there are, as usual, the images of Ganga and Yamuna and those of Dvarpals (Presiding Officers of the
          gate). In the brackets given above, figures of Chaturbhuj Sasan devis (four armed administrative goddesses)
          and not those of loving couples, as usual, have been given. In the pedastal of these goddess figures, the
          images of deer, parrot, lion, bull and other Vahan (vehicles) have been carved out. On both sides of these
          goddesses, gandharvas, busy with their musical performances have been displayed and in the central arch placed
          above figures of similar goddesses with articles like Sankha (counch) Kamal (lotus) Kalash (water jar),
          Kulisha (axe) and Pasa (net) etc. in their hands have been shown fitted in brackets.
        </p>
        <p>
          In the highest Toran (lintel arch) of this gate, the mother of the Tirthankar has been shown sleeping and
          having auspicious dreams on the eve of conception. She is being attended to by Sachi, the wife of Indra. This
          plate is unique as no where alse the mother of the Tirthankar has been depicted alongwith the sixteen
          auspicious symbols, seen in the dream by her.
        </p>
        <Image
          src="/images/adinath-idol.jpg"
          width={100}
          height={100}
          className="w-1/3 h-auto rounded-md float-right ml-6 pb-6 mt-6"
          alt="Shri 1008 Adinath Temple"
        />

        <p>
          The sanctum of this temple is quite simple and the Vedika (altar) seems to have been built at some later
          stage. The roof of this sanctum has been built with a Padma-Sila (lotus like stone) which consists of two
          stones of the form of lotus flower, combined in one. This Padma-Sila has added much to the beauty of this
          sanctum, in the heart whereof, the idol of first Jain Tirthankar Lord Adinath has been installed. This idol is
          dated Samvat 1215 of Vikram Era (1158 A.D.) and the stone used therefor is black in colour.
        </p>
        <p>
          The inscription given in the pedastal of the idol describes the installation of the statue of Sambhava Nath by
          Shri Sale on Magha Shukla Panchami of the Vikram Samvat 1215 (1158 A.D.) during the reign of Madan Verma.
        </p>
        <p>
          On account of the afore-mentioned sculptural features, this temples, though smaller and simpler, can be safely
          described as a fine specimen of the temple architecture of the laterhalf of the Mediaeval era.
        </p>
      </AboutLayout>
    </Page>
  );
}
