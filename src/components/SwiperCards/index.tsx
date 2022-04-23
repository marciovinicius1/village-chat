import React from 'react';

import { Container } from './styles';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CardZombie from './CardZombie';
import CardKing from './CardKing';
import CardKnight from './CardKnight';

const SwiperCards: React.FC = () => {
  return (
    <Container>
      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
      >
        <SwiperSlide>
          <CardKnight />
        </SwiperSlide>

        <SwiperSlide>
          <CardKing />
        </SwiperSlide>

        <SwiperSlide>
          <CardZombie />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default SwiperCards;
