import { EmblaOptionsType } from 'embla-carousel-react';

import EmblaCarousel from '@/components/carousel';

const OPTIONS: EmblaOptionsType = { loop: true };

const Header = () => {
  const images: string[] = [
    `/images/shantinathji.webp`,
    `/images/parshwanathji.webp`,
    `/images/aadinathji.webp`,
    `/images/ghantai.webp`,
  ];
  return (
    <header className="bg-slate-700">
      <div className="max-w-7xl mx-auto">
        <EmblaCarousel slides={images} options={OPTIONS} imgClassNamesOverride="w-full object-cover" />
      </div>
    </header>
  );
};

export default Header;
