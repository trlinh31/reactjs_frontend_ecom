import React, { useEffect } from 'react';
import Banner1 from './../../assets/images/banner-01.jpg';
import Banner2 from './../../assets/images/banner-02.jpg';
import Banner3 from './../../assets/images/8_1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section2() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='grid lg:grid-cols-4 lg:grid-rows-4 gap-6 lg:h-[1000px] overflow-hidden my-20'>
      <div
        className='lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-4 bg-white p-4 rounded-xl hover:shadow-md'
        data-aos='zoom-in'
        data-aos-duration='1200'
        data-aos-once='true'>
        <img src={Banner1} className='w-full h-full object-cover rounded-lg' alt='' />
      </div>
      <div
        className='lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-5 bg-white p-4 rounded-xl hover:shadow-md'
        data-aos='zoom-in'
        data-aos-duration='1200'
        data-aos-once='true'>
        <img src={Banner3} className='w-full h-full object-cover rounded-lg' alt='' />
      </div>
      <div
        className='lg:col-start-1 lg:col-end-3 lg:row-start-4 lg:row-end-5 bg-white p-4 rounded-xl hover:shadow-md'
        data-aos='zoom-in'
        data-aos-duration='1200'
        data-aos-once='true'>
        <img src={Banner2} className='w-full h-full object-cover rounded-lg' alt='' />
      </div>
    </div>
  );
}
