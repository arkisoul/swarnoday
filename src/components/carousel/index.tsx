import React, { useCallback } from 'react';
import useEmblaCarousel, { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { DotButton, useDotButton } from './dot-buttons';

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onButtonClick = useCallback((emApi: EmblaCarouselType) => {
    const { autoplay } = emApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onButtonClick);

  return (
    <div className="embla relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div className="embla__slide relative min-w-0 flex-[0_0_100%]" key={slide}>
              <img
                className="embla__slide__img block w-full h-screen object-contain"
                src={slide}
                alt="Swarnoday Tirth temples"
              />
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
