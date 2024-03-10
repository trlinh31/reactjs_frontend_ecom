import React, { Fragment } from 'react';
import { IoIosClose } from 'react-icons/io';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { useCart } from '../../hooks/useCart';

export default function Cart({ showCart, setShowCart }) {
  const { cartState, handleIncrement, handleDecrement, handleDeleteCartItem, handleGetTotalPrice } = useCart();

  return (
    <Fragment>
      <div className={`${showCart ? 'visible' : 'invisible'}`}>
        <div className='fixed top-0 left-0 right-0 bottom-0 w-full bg-gray-600 bg-opacity-60 z-50' onClick={() => setShowCart(false)}></div>
        <div
          className={`fixed top-0 right-0 bottom-0 bg-white py-[60px] px-[50px] transition-all duration-300 z-50 
          ${showCart ? 'w-full lg:w-[600px] max-w-full visible opacity-100' : 'translate-x-full invisible opacity-0'}`}
          onClick={(e) => e.stopPropagation()}>
          <div className='flex items-center justify-between border-b pb-4'>
            <h1 className='font-semibold text-2xl'>Cart Review</h1>
            <div className='btn-close w-[40px] h-[40px] hover:rotate-90 transition-transform duration-200' onClick={() => setShowCart(false)}>
              <IoIosClose size={30} />
            </div>
          </div>
          <ul className='mt-8'>
            {cartState.cartItems.length > 0 &&
              cartState.cartItems.map((item, index) => (
                <li key={index} className='border-b-2 mb-5 pb-5'>
                  <div className='flex item-center'>
                    <div className='relative w-[100px] h-[100px]'>
                      <div className='absolute top-[-10px] left-[-10px] z-20 p-[2px] bg-white rounded-full'>
                        <div className='btn-close w-[30px] h-[30px]' onClick={() => handleDeleteCartItem(item.id, item.size)}>
                          <IoIosClose size={30} />
                        </div>
                      </div>
                      <img src={item.image} className='w-full h-full object-cover object-top rounded-xl' alt='...' />
                    </div>
                    <div className='flex flex-col justify-between lg:flex-row ml-4 lg:ml-8'>
                      <div className='flex flex-col justify-around'>
                        <h3 className='font-semibold'>
                          {item.title} ({item.size})
                        </h3>
                        <p>${item.price}</p>
                      </div>
                      <div className='flex items-center gap-x-3 lg:ml-8'>
                        <button
                          className='w-[30px] h-[30px] rounded-full bg-gray-200 flex items-center justify-center'
                          onClick={() => handleDecrement(item.id, item.size)}>
                          <FaMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className='w-[30px] h-[30px] rounded-full bg-gray-200 flex items-center justify-center'
                          onClick={() => handleIncrement(item.id, item.size)}>
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
          <div className='absolute left-0 right-0 bottom-0 py-10 px-[50px]'>
            <div className='flex items-center justify-between'>
              <h1 className='font-bold text-3xl text-gray-600'>Total:</h1>
              <h1 className='font-bold text-3xl text-gray-600'>${handleGetTotalPrice()}</h1>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
