import React, { useCallback, useEffect, useState } from 'react'
import { Image, Swiper, SwiperItem } from '@tarojs/components'

function Carousel({data}) {
  const [index, setIndex] = useState(0);

  return (
    <Swiper
      indicatorColor='#999'
      indicatorActiveColor='#333'
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
            {/* <view style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{it.text}</view> */}
            <Image src={it.src} style={{width: '100%', height: 'inherit'}}/>
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