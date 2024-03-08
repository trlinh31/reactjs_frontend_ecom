import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import data from '../../db/data';
import Card from '../Card/Card';
import SwiperButton from '../SwiperButton/SwiperButton';

export default function ProductsSwiper() {
  return (
    <Fragment>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='font-extrabold text-3xl uppercase'>New Arrivals</h1>
        <div className='flex items-center gap-x-4'>
          <SwiperButton />
        </div>
      </div>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={50}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card id={item.id} image={item.image} title={item.title} slug={item.slug} price={item.price} reviews={item.reviews} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
}
