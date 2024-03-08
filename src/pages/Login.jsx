import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

export default function Login() {
  return (
    <div className='w-screen h-screen flex items-center justify-center px-4'>
      <div className='grid grid-cols-1 lg:grid-cols-2 shadow-lg w-[800px] bg-white rounded-l-2xl lg:rounded-ee-2xl overflow-hidden'>
        <div className='col-span-1 py-[40px] px-[60px] rounded-r-3xl'>
          <Link to={'/'} className='text-gray-400 pb-8 block text-sm' title='Go back'>
            <FaArrowAltCircleLeft size={20} color='blue' />
          </Link>
          <h1 className='text-3xl font-bold text-gray-600 pb-14'>Welcome Back!</h1>
          <div className='mb-3'>
            <label htmlFor='form-email' className='block mb-2 text-gray-600 text-md'>
              Email:
            </label>
            <input
              type='text'
              id='form-email'
              className='w-full py-2 px-4 outline-none border border-gray-300 rounded-md text-sm text-gray-600'
              placeholder='Enter your email...'
              autoFocus
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='form-password' className='block mb-2 text-gray-600 text-md'>
              Password:
            </label>
            <input
              type='password'
              id='form-password'
              className='w-full py-2 px-4 outline-none border border-gray-300 rounded-md text-sm text-gray-600'
              placeholder='Enter your password...'
            />
          </div>
          <div className='flex flex-col gap-y-4 mt-8'>
            <button className='bg-black text-white py-3 rounded-md'>Sign In</button>
            <button className='bg-gray-100 py-3 rounded-md shadow-md flex gap-x-2 items-center justify-center'>
              <FcGoogle size={20} />
              Sign in with Google
            </button>
          </div>
        </div>
        <div className='col-span-1 relative hidden lg:block rounded-ss-2xl rounded-ee-2xl overflow-hidden'>
          <img
            src='https://img.freepik.com/free-photo/still-life-daisy-flowers_23-2150321433.jpg?t=st=1709888340~exp=1709891940~hmac=013c6fdeca217a362a641b3145a49bdbc77c4bb1287e66b9bec99628d3cdedaa&w=360'
            className='absolute top-0 left-0 w-full h-full object-cover'
            alt='...'
          />
          <Link to={'/signup'} className='absolute top-6 right-6 text-white'>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
