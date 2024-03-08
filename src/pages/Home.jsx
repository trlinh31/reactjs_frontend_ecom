import React, { Fragment } from 'react';
import VideoSection from '../components/VideoSection/VideoSection';
import Section1 from '../components/Section1/Section1';
import ProductsSwiper from '../components/ProductSwiper/ProductsSwiper';
import Section2 from '../components/Section2/Section2';

export default function Home() {
  return (
    <Fragment>
      <VideoSection />
      {/* <Section1 /> */}
      <div className='container'>
        <ProductsSwiper />
        <Section2 />
      </div>
    </Fragment>
  );
}
