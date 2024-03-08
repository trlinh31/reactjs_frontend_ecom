import React from 'react';

export default function Category({ handleCategoryChange }) {
  return (
    <div className='flex flex-col mb-3'>
      <h1 className='font-medium uppercase text-xl pb-4'>Category</h1>
      <label className='flex items-center mb-3'>
        <input type='radio' onChange={handleCategoryChange} value='' name='category' />
        <span className='pl-2'>All</span>
      </label>
      <label className='flex items-center mb-3'>
        <input type='radio' onChange={handleCategoryChange} value='men' name='category' />
        <span className='pl-2'>Men</span>
      </label>
      <label className='flex items-center mb-3'>
        <input type='radio' onChange={handleCategoryChange} value='women' name='category' />
        <span className='pl-2'>Women</span>
      </label>
    </div>
  );
}
