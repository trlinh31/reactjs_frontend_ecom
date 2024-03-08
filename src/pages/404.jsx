import React from 'react';

export default function NotFound() {
  return (
    <div className='w-screen h-screen flex flex-col text-center items-center justify-center'>
      <h1 className='font-extrabold text-8xl text-blue-900 pb-8'>404</h1>
      <p className='text-xl lg:text-3xl font-bold text-orange-500'>Oops! Something went wrong</p>
    </div>
  );
}
