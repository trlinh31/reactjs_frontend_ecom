import React, { Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';

export default function LoadingSkeleton({ isLoading }) {
  return (
    <Fragment>
      {isLoading && (
        <ul className='my-5 max-h-[400px] overflow-y-auto'>
          {Array(3)
            .fill(0)
            .map((item, index) => (
              <li key={index} className='w-full border p-3 rounded-lg hover:shadow-lg mb-3'>
                <div className='flex items-center gap-x-5'>
                  <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                    <Skeleton className='h-full' />
                  </div>
                  <div className='w-1/2'>
                    <div className='w-full mb-4'>
                      <Skeleton />
                    </div>
                    <div className='w-[60px] h-[30px]'>
                      <Skeleton className='h-full' />
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      )}
    </Fragment>
  );
}
