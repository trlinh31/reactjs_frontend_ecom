import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import Size from '../components/Size/Size';
import { IoBagHandle } from 'react-icons/io5';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';
import { useCart } from '../hooks/useCart';
import ImageZoom from 'react-image-zooom';
import { useWishlist } from './../hooks/useWishlist';
import { useGetProductById } from '../hooks/useAPI';

export default function Detail() {
  const [product, setProduct] = useState({});
  const { id, slug } = useParams();

  const fetchData = async () => {
    const productApi = await useGetProductById(id);
    setProduct(productApi);
  };

  useEffect(() => {
    fetchData();
  }, [id, slug]);

  const [size, setSize] = useState('');
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const { handleAddToCart } = useCart();
  const { addToWishlist, checkProductInWishlist } = useWishlist();

  return (
    <div className='bg-white py-10'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-10'>
          <div className='col-span-12 lg:col-span-6 w-full h-[70vh] rounded-xl overflow-hidden'>
            <img src={product.image} className='image-product-large h-full object-cover object-top' alt='...' />
          </div>
          <div className='col-span-12 lg:col-span-6'>
            <h1 className='font-bold text-3xl pb-4'>{product.title}</h1>
            <div className='flex items-center gap-x-1 mb-10'>
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
              <span className='pl-2 pt-1 text-gray-500'>{product.reviews} reviews</span>
            </div>
            <h1 className='font-bold text-4xl text-gray-600 pb-8'>${product.price}</h1>
            <div className='mb-10'>
              <p className='pb-3'>Select Size</p>
              <div className='flex gap-x-3'>
                <Size title='M' value='M' size={size} handleSizeChange={handleSizeChange} />
                <Size title='L' value='L' size={size} handleSizeChange={handleSizeChange} />
                <Size title='XL' value='XL' size={size} handleSizeChange={handleSizeChange} />
                <Size title='XXL' value='XXL' size={size} handleSizeChange={handleSizeChange} />
              </div>
            </div>
            <p className='mb-12 text-gray-400 text-justify text-sm leading-relaxed'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam velit quaerat facere, quos ad molestias earum porro. Maiores, atque
              earum? Aperiam beatae ex facere nemo aut, distinctio praesentium odit enim.
            </p>
            <div className='flex items-center gap-x-10'>
              <button
                className='bg-black flex-1 text-white flex items-center justify-center py-4 rounded-xl shadow'
                onClick={() => handleAddToCart(product, size)}>
                <IoBagHandle size={20} />
                <span className='pl-2 text-xl'>Add to cart</span>
              </button>
              <button className='bg-gray-300 flex items-center justify-center p-4 rounded-xl shadow' onClick={() => addToWishlist(product.id)}>
                {!checkProductInWishlist(product.id) ? <FaRegHeart size={30} /> : <FaHeart size={30} className='text-red-600' />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
