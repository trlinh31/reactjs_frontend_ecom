import React from 'react';

export default function Price({ handlePriceChange }) {
  return (
    <div className='flex flex-col'>
      <h1 className='font-medium uppercase text-xl pb-4'>Price</h1>
      <label className='flex items-center mb-3'>
        <input type='radio' onChange={handlePriceChange} value='' name='price' />
        <span className='pl-2'>All</span>
      </label>
      <label className='flex items-center mb-3'>
        <input type='radio' onChange={handlePriceChange} value='50' name='price' />
        <span className='pl-2'>$0 - $50</span>
      </label>
      <label className='flex items-center mb-3'>
        <input type='radio' onChange={handlePriceChange} value='100' name='price' />
        <span className='pl-2'>$50 - $100</span>
      </label>
      <label className='flex items-center mb-3'>
        <input type='radio' onChange={handlePriceChange} value='150' name='price' />
        <span className='pl-2'>$100 - $150</span>
      </label>
      <label className='flex items-center mb-3'>
        <input type='radio' onChange={handlePriceChange} value='200' name='price' />
        <span className='pl-2'>$200+</span>
      </label>
    </div>
  );
}
