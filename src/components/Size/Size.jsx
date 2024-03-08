import React, { Fragment } from 'react';

export default function Size({ title, value, size, handleSizeChange }) {
  return (
    <Fragment>
      <label className={`${size === value ? 'bg-black text-white' : ''} w-[50px] h-[50px] flex items-center justify-center border cursor-pointer`}>
        <input hidden type='radio' className='size-radio' onChange={handleSizeChange} name='size' value={value} />
        {title}
      </label>
    </Fragment>
  );
}
