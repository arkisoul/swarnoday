import { EmblaOptionsType } from 'embla-carousel-react';

import EmblaCarousel from '@/components/carousel';

const OPTIONS: EmblaOptionsType = { loop: true };

const Header = () => {
  const images: string[] = [
    `/images/temple3.jpeg`,
    `/images/temple1.jpg`,
    `/images/temple2.jpg`,
    `/images/museum.jpeg`,
  ];
  return (
    <header className="max-w-7xl mx-auto w-screen">
      <EmblaCarousel slides={images} options={OPTIONS} />
    </header>
  );
};

export default Header;
