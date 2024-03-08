import React from 'react';

export default function Products({ result }) {
  return <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 lg:pl-10 min-h-[60vh]'>{result}</div>;
}
