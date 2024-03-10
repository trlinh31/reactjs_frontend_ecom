import React, { Fragment, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Card from '../Card/Card';
import SwiperButton from '../SwiperButton/SwiperButton';
import { useGetAllProducts } from '../../hooks/useAPI';

export default function ProductsSwiper() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const productsApi = await useGetAllProducts();
    setProducts(productsApi);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <Card product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
}
