import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
 

const Live = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop={true}
      centeredSlides={true}
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
    >
      <SwiperSlide>
        <a href="https://k-arena.com/" className="slide-link">
          <div className="slide-wrapper">
            <img src="k-ari.jpg" alt="1" className="slide-image"/>
            <div className="slide-text">kアリーナ</div>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://www.tokyo-dome.co.jp/" className="slide-link">
          <div className="slide-wrapper">
            <img src="Tokyodomecity.jpg" alt="2" className="slide-image"/>
            <div className="slide-text">東京ドームシティホール</div>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://www.bigsight.jp/" className="slide-link">
          <div className="slide-wrapper">
            <img src="kokusaiko-ru.jpg" alt="3" className="slide-image"/>
            <div className="slide-text">国際展示場</div>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://ariake-arena.tokyo/" className="slide-link">
          <div className="slide-wrapper">
            <img src="ariakeari-na.jpg" alt="4" className="slide-image"/>
            <div className="slide-text">有明アリーナ</div>
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default Live;