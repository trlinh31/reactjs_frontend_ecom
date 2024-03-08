import React from 'react';

export default function Radio({ handleChange, title, name, value }) {
  return (
    <label className='flex items-center mb-3'>
      <input type='radio' name={name} value={value} onChange={handleChange} />
      <span className='pl-2'>{title}</span>
    </label>
  );
}
