type Props = {
  heading: string;
  subheading?: string;
};

const Section = ({ heading }: Props) => (
  <section className="max-w-7xl mx-auto py-4 px-2">
    <h2 className="font-sans-serif font-bold text-center text-2xl mb-4">{heading}</h2>
  </section>
);

export default Section;
