import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax } from 'swiper/modules';

import styles from './SliderHero.module.scss';
import 'swiper/css';

const SliderHero = ({ sliderContent }) => {
  return (
    <div className={styles.container}>
      <Swiper
        speed={600}
        parallax={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Parallax]}
        className={styles.mySwiper}>
        {sliderContent.map((item) => (
          <SwiperSlide key={item.id} className={styles.mySwiper__slider}>
            <img
              className={styles.mySwiper__image}
              data-swiper-parallax="-700"
              src={item.image}
              alt={item.imageTitle}
              width={940}
              height={480}
              style={{ borderRadius: `${item.radius}` }}
            />
            <div className={styles.mySwiper__info}>
              <h2 data-swiper-parallax="0" className={styles.mySwiper__title}>
                {item.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderHero;
