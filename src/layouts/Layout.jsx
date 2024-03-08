import React, { Fragment, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { IoMdArrowRoundUp } from 'react-icons/io';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer/Footer';

export default function Layout() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', show);
    return () => window.removeEventListener('scroll', show);
  }, []);

  const show = () => {
    if (window != undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setShowButton(true) : setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Fragment>
      <Navbar />
      <main className='main-wrapper'>
        <Outlet />
      </main>
      {showButton && (
        <button
          className='hidden lg:block fixed bottom-10 right-10 bg-blue-600 p-3 z-30 rounded-xl shadow-xl hover:translate-y-[-10px] transition-transform ease-linear'
          onClick={scrollToTop}>
          <IoMdArrowRoundUp size={30} className='text-white' />
        </button>
      )}
      <Footer />
      <ToastContainer />
    </Fragment>
  );
}
