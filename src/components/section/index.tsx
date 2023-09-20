type Props = {
  heading: string;
  subheading?: string;
  classNames?: string[];
  children?: React.ReactNode;
};

const Section = ({ heading, subheading, classNames = [], children }: Props) => (
  <section className={`mx-auto py-12 px-2 ${classNames.join(` `)}`}>
    <h2 className="font-sans font-bold text-center text-2xl mb-6">{heading}</h2>
    {subheading ? <p className="font-sans text-center text-base mb-4">{subheading}</p> : null}
    {children}
  </section>
);

export default Section;
