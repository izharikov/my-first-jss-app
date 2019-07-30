import React from 'react';
import Carousel from 'nuka-carousel';
import './index.module.scss';

const dispatchResize = () => {
  window.dispatchEvent(new Event('resize'));
};

export class CustomCarousel extends React.Component {
  render() {
    const img = i => 'https://via.placeholder.com/1000x300?text=' + i;
    const items = [...Array(5).keys()].map(i => (
      <div key={i}>
        <img src={img(i + 1)} onLoad={dispatchResize} />
      </div>
    ));
    return <Carousel>{items}</Carousel>;
  }
}
