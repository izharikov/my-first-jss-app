import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ImageWithZoom,
  ButtonFirst,
  ButtonLast,
  DotGroup
} from 'pure-react-carousel'; // TODO: replace with https://github.com/FormidableLabs/nuka-carousel
import 'pure-react-carousel/dist/react-carousel.es.css';
import './index.module.scss';

const carouselConfig = {
  responsive: {
    0: {
      items: 1
    },
    1024: {
      items: 3
    }
  },
  stagePadding: {
    paddingLeft: 0, // in pixels
    paddingRight: 0
  }
};

export const Carousel = () => {
  const img = i => 'https://via.placeholder.com/1000x300?text=' + i;
  const items = [...Array(5).keys()].map(i => (
    <Slide index={i} key={i}>
      <img src={img(i + 1)} />
    </Slide>
  ));
  return (
    <CarouselProvider
      visibleSlides={3}
      totalSlides={5}
      step={3}
      naturalSlideWidth={400}
      naturalSlideHeight={20}
    >
      <h2>Carousel (With Master Loading Spinner)</h2>
      <p>
        This spinner will go away after all the images have loaded. You might
        want to use Chrome dev tools to throttle the network connection so you
        can see the spinner.
      </p>
      <Slider>{items}</Slider>
      <ButtonFirst>First</ButtonFirst>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
      <ButtonLast>Last</ButtonLast>
      <DotGroup />
    </CarouselProvider>
  );
};
