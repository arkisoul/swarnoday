import React, { useCallback, useMemo } from 'react';
import useEmblaCarousel, { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { DotButton, useDotButton } from './dot-buttons';

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
  imgClassNamesOverride?: string;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, imgClassNamesOverride } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onButtonClick = useCallback((emApi: EmblaCarouselType) => {
    const { autoplay } = emApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onButtonClick);

  const imgClassNames = useMemo(() => {
    const defaultClassNames = [`embla__slide__img`, `block`, `w-full`];
    if (imgClassNamesOverride) defaultClassNames.push(imgClassNamesOverride);
    else defaultClassNames.push(`h-screen`, `object-contain`);
    return defaultClassNames.join(` `);
  }, [imgClassNamesOverride]);

  return (
    <div className="embla relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div className="embla__slide h-fit relative min-w-0 flex-[0_0_100%]" key={slide}>
              <img className={imgClassNames} src={slide} alt="Swarnoday Tirth temples" />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((snap, index) => (
          <DotButton
            key={snap}
            onClick={() => onDotButtonClick(index)}
            className={`embla__dot`.concat(index === selectedIndex ? ` embla__dot--selected` : ``)}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
