import React, { Fragment } from 'react';
import { MdOutlineChevronRight, MdOutlineChevronLeft } from 'react-icons/md';

export default function SwiperButton() {
  return (
    <Fragment>
      <button className='swiper-prev w-[40px] h-[40px] flex items-center justify-center text-gray-400 bg-gray-50 rounded-lg shadow-sm lg:hover:scale-125 lg:hover:bg-blue-600 lg:hover:text-white transition-transform duration-500'>
        <MdOutlineChevronLeft size={30} />
      </button>
      <button className='swiper-next w-[40px] h-[40px] flex items-center justify-center text-gray-400 bg-gray-50 rounded-lg shadow-sm lg:hover:scale-125 lg:hover:bg-blue-600 lg:hover:text-white transition-transform duration-500'>
        <MdOutlineChevronRight size={30} />
      </button>
    </Fragment>
  );
}
