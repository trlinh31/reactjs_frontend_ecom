import React, { Fragment } from 'react';
import Category from '../Filter/Category/Category';
import Price from '../Filter/Price/Price';

export default function Sidebar({ showFilter, setShowFilter, handleCategoryChange, handlePriceChange }) {
  return (
    <Fragment>
      <div className='hidden lg:block'>
        <Category handleCategoryChange={handleCategoryChange} />
        <Price handlePriceChange={handlePriceChange} />
      </div>
      <div className={`${showFilter ? 'visible' : 'invisible'}`}>
        <div className='fixed top-0 left-0 right-0 bottom-0 w-full bg-gray-600 bg-opacity-60 z-50' onClick={() => setShowFilter(false)}></div>
        <div
          className={`fixed top-0 bottom-0 bg-white py-[60px] px-[20px] transition-all duration-300 z-50
          ${showFilter ? 'w-[50vw] visible opacity-100 left-0' : 'left-[-100%] invisible opacity-0'}`}
          onClick={(e) => e.stopPropagation()}>
          <Category handleCategoryChange={handleCategoryChange} />
          <Price handlePriceChange={handlePriceChange} />
        </div>
      </div>
    </Fragment>
  );
}
