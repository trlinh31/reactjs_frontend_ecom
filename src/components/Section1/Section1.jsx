import React from 'react';
import Coin from './../../assets/images/coin.png';
import Delivery from './../../assets/images/delivery.png';
import Like from './../../assets/images/like.png';
import WallClock from './../../assets/images/wall-clock.png';

export default function Section1() {
  return (
    <section className='container w-full my-10'>
      <div className='grid grid-cols-2 md:grid-cols-4'>
        <div className='col-span-1'>
          <div className='flex gap-x-5 h-[64px]'>
            <img src={Delivery} className='h-[40px] block my-auto' alt='' />
            <div className='flex flex-col justify-around py-2'>
              <h3 className='text-gray-700'>Fast, Free Shipping</h3>
              <p className='text-sm text-gray-500'>On order over $50</p>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='flex gap-x-5 h-[64px]'>
            <img src={WallClock} className='h-[40px] block my-auto' alt='' />
            <div className='flex flex-col justify-around py-2'>
              <h3 className='text-gray-700'>Next Day Delivery</h3>
              <p className='text-sm text-gray-500'>Free– spend over $99</p>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='flex gap-x-5 h-[64px]'>
            <img src={Coin} className='h-[40px] block my-auto' alt='' />
            <div className='flex flex-col justify-around py-2'>
              <h3 className='text-gray-700'>Low Price Guarantee</h3>
              <p className='text-sm text-gray-500'>We offer competitive prices</p>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='flex gap-x-5 h-[64px]'>
            <img src={Like} className='h-[40px] block my-auto' alt='' />
            <div className='flex flex-col justify-around py-2'>
              <h3 className='text-gray-700'>Satisfaction Guarantee</h3>
              <p className='text-sm text-gray-500'>We Guarantee Our Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
