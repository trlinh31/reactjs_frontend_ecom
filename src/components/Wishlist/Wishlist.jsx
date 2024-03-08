import React, { Fragment } from 'react';
import { IoIosClose } from 'react-icons/io';
import { useWishlist } from '../../hooks/useWishlist';
import { FaStar } from 'react-icons/fa6';

export default function Wishlist({ showWishlist, setShowWishlist }) {
  const { wishlist } = useWishlist();

  return (
    <Fragment>
      <div className={`${showWishlist ? 'visible' : 'invisible'}`}>
        <div className='fixed top-0 left-0 right-0 bottom-0 w-full bg-gray-600 bg-opacity-60 z-50' onClick={() => setShowWishlist(false)}></div>
        <div
          className={`fixed top-0 right-0 bottom-0 bg-white py-[60px] px-[50px] transition-all duration-300 z-50 
          ${showWishlist ? 'w-full lg:w-[600px] max-w-full visible opacity-100' : 'translate-x-full invisible opacity-0'}`}
          onClick={(e) => e.stopPropagation()}>
          <div className='flex items-center justify-between border-b pb-4'>
            <h1 className='font-semibold text-2xl'>Wishlist</h1>
            <div className='btn-close w-[40px] h-[40px] hover:rotate-90 transition-transform duration-200' onClick={() => setShowWishlist(false)}>
              <IoIosClose size={30} />
            </div>
          </div>
          <ul className='mt-8'>
            {wishlist.length > 0 &&
              wishlist.map((item, index) => (
                <li key={index} className='border-b-2 mb-5 pb-5'>
                  <div className='flex item-center'>
                    <div className='relative w-[100px] h-[100px]'>
                      <div className='absolute top-[-10px] left-[-10px] z-20 p-[2px] bg-white rounded-full'>
                        <div className='btn-close w-[30px] h-[30px]'>
                          <IoIosClose size={30} />
                        </div>
                      </div>
                      <img src={item.image} className='w-full h-full object-cover object-top rounded-xl' alt='...' />
                    </div>
                    <div className='flex flex-col justify-between lg:flex-row ml-4 lg:ml-8'>
                      <div className='flex flex-col gap-y-1'>
                        <div className='flex items-center'>
                          <FaStar className='text-yellow-400' />
                          <FaStar className='text-yellow-400' />
                          <FaStar className='text-yellow-400' />
                          <FaStar className='text-yellow-400' />
                          <FaStar className='text-yellow-400' />
                          <span className='pl-2 pt-1 text-gray-700'>({item.reviews})</span>
                        </div>
                        <h3 className='font-semibold'>{item.title}</h3>
                        <p>${item.price}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
