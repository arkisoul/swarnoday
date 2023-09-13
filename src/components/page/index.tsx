import Head from 'next/head';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

interface IProps {
  children: React.ReactNode;
}

const Page = ({ children }: IProps) => (
  <>
    <Head>
      <link rel="icon" href="/logo.svg" />
    </Head>
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {children}
      <Footer />
    </div>
  </>
);

export default Page;
