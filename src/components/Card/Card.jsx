import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegEye } from 'react-icons/fa';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa6';
import { useWishlist } from '../../hooks/useWishlist';

export default function Card({ product }) {
  const { addToWishlist, checkProductInWishlist } = useWishlist();
  return (
    <div className='product-item'>
      <div className='product-img relative'>
        <img src={product.image} className='rounded-2xl w-full h-[373px] object-cover' alt='' />
        <div className='product-hover'>
          <div className='flex items-center gap-x-3 justify-center'>
            <Link to={'/product/' + product.id + '/' + product.slug} className='bg-white rounded-lg p-3 shadow-lg'>
              <FaRegEye size={20} />
            </Link>
            <button className='bg-white rounded-lg p-3 shadow-lg' onClick={() => addToWishlist(product.id)}>
              {!checkProductInWishlist(product.id) ? <FaRegHeart size={20} /> : <FaHeart size={20} className='text-red-600' />}
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-1'>
        <div className='flex items-center pt-4'>
          <FaStar className='text-yellow-400' />
          <FaStar className='text-yellow-400' />
          <FaStar className='text-yellow-400' />
          <FaStar className='text-yellow-400' />
          <FaStar className='text-yellow-400' />
          <span className='pl-2 pt-1 text-gray-700'>({product.reviews})</span>
        </div>
        <h4 className='font-semibold text-lg text-gray-500 line-clamp-1'>{product.title}</h4>
        <p className='text-xl font-bold text-gray-800'>${product.price}</p>
      </div>
    </div>
  );
}
