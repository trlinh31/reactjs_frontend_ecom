import React from 'react';
import { IoMail } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='bg-white'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 py-[50px]'>
          <div className='col-span-1'>
            <h1 className='font-semibold text-xl pb-5'>Support</h1>
            <div className='text-gray-600'>
              <p className='text-sm w-full pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, dolorum.</p>
              <div className='flex items-center gap-x-2 mb-2'>
                <IoMail />
                <span className='text-sm'>nguyentranlinh31@gmail.com</span>
              </div>
              <div className='flex items-center gap-x-2 mb-2'>
                <FaPhone />
                <span className='text-sm'>+84 979 349 098</span>
              </div>
            </div>
          </div>
          <div className='col-span-1'>
            <h1 className='font-semibold text-xl pb-5'>Account</h1>
            <div className='text-gray-600'>
              <p className='text-sm pb-5'>My Account</p>
              <p className='text-sm pb-5'>Login / Register</p>
              <p className='text-sm pb-5'>Cart</p>
              <p className='text-sm pb-5'>Wishlist</p>
              <p className='text-sm pb-5'>Shop</p>
            </div>
          </div>
          <div className='col-span-1'>
            <h1 className='font-semibold text-xl pb-5'>Quick Link</h1>
            <div className='text-gray-600'>
              <p className='text-sm pb-5'>Privacy Policy</p>
              <p className='text-sm pb-5'>Terms Of Use</p>
              <p className='text-sm pb-5'>FAQ</p>
              <p className='text-sm pb-5'>Contact</p>
            </div>
          </div>
          <div className='col-span-1'>
            <h1 className='font-semibold text-xl pb-5'>Follow</h1>
            <div className='flex items-center gap-x-4'>
              <FaSquareFacebook size={30} color='blue' />
              <FaInstagram size={30} color='red' />
              <FaTwitter size={30} color='blue' />
              <FaGithub size={30} color='black' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
