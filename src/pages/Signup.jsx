import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from '../hooks/useAuth';

export default function Signup() {
  const { signUp } = useAuth();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(data.email, data.password);
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='w-screen h-screen flex items-center justify-center px-4'>
      <div className='grid grid-cols-1 lg:grid-cols-2 shadow-lg w-[800px] bg-white rounded-l-2xl lg:rounded-ee-2xl overflow-hidden'>
        <div className='col-span-1 py-[40px] px-[60px] rounded-r-3xl'>
          <Link to={'/'} className='text-gray-400 pb-8 block text-sm' title='Go back'>
            <FaArrowAltCircleLeft size={20} color='blue' />
          </Link>
          <h1 className='text-3xl font-bold text-gray-600 pb-14'>Sign Up</h1>
          <form onSubmit={handleSubmit} method='post'>
            <div className='mb-3'>
              <label htmlFor='form-email' className='block mb-2 text-gray-600 text-md'>
                Email:
              </label>
              <input
                type='text'
                id='form-email'
                name='email'
                value={data.email}
                className='w-full py-2 px-4 outline-none border border-gray-300 rounded-md text-sm text-gray-600'
                placeholder='Enter your email...'
                onChange={handleChangeInput}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='form-password' className='block mb-2 text-gray-600 text-md'>
                Password:
              </label>
              <input
                type='password'
                id='form-password'
                name='password'
                value={data.password}
                className='w-full py-2 px-4 outline-none border border-gray-300 rounded-md text-sm text-gray-600'
                placeholder='Enter your password...'
                onChange={handleChangeInput}
              />
            </div>
            <div className='flex flex-col gap-y-4 mt-8'>
              <button className='bg-black text-white py-3 rounded-md'>Create Account</button>
            </div>
          </form>
        </div>
        <div className='col-span-1 relative hidden lg:block rounded-ss-2xl rounded-ee-2xl overflow-hidden'>
          <img
            src='https://img.freepik.com/free-photo/still-life-daisy-flowers_23-2150321433.jpg?t=st=1709888340~exp=1709891940~hmac=013c6fdeca217a362a641b3145a49bdbc77c4bb1287e66b9bec99628d3cdedaa&w=360'
            className='absolute top-0 left-0 w-full h-full object-cover'
            alt='...'
          />
          <Link to={'/login'} className='absolute top-6 right-6 text-white'>
            Sign In
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
