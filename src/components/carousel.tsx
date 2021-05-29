import React, { useState } from 'react'
import { Image, Swiper, SwiperItem } from '@tarojs/components'

function Carousel({data}) {
  const [index, setIndex] = useState(0);

  return (
    <Swiper
      indicatorColor='#f6f6f6'
      indicatorActiveColor='#8785a2'
      circular
      indicatorDots
      autoplay
      current={index}
      onChange={e => setIndex(e.detail.current)}
      style={{height: '100%'}}
    >
      {
        data.map((it, i) => (
          <SwiperItem key={i}>
            <Image src={it.src} mode="aspectFill" style={{width: '100%', height: '100%'}}/>
          </SwiperItem>
        ))
      }
    </Swiper>
  );
};

Carousel.defaultProps = {
  data: []
};
export default Carousel;