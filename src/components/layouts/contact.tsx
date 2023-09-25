import Main from '@/components/main';
// import Affix from "@/components/affix";
// import { ContactLinks } from '@/constants/routes';

type Props = {
  heading: string;
  children: React.ReactNode;
};

export default function ContactLayout({ heading, children }: Props) {
  return (
    <Main>
      <div className="bg-white flex max-w-7xl mx-auto">
        <section className="content flex-1 py-6 px-4">
          <h1 className="font-sans text-2xl font-bold font-slate-700 text-center mb-8">{heading}</h1>
          <div className="space-y-3 text-justify px-8 italic">{children}</div>
        </section>
        {/* <div className="sidebar flex-[0_0_20%] border-l border-r">
          <Affix links={FacilitiesLinks} />
        </div> */}
      </div>
    </Main>
  );
}
