import React, { Fragment, useEffect, useState } from 'react';
import { URL } from './../../router/AppURL';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa6';
import { BiSearch, BiUser } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import Cart from '../Cart/Cart';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosClose } from 'react-icons/io';
import Search from '../Search/Search';
import Wishlist from '../Wishlist/Wishlist';
import { useAuth } from '../../hooks/useAuth';
import { FaSignOutAlt } from 'react-icons/fa';

export default function Navbar() {
  const { user, logOut } = useAuth();
  const [sticky, setSticky] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showNavMobile, setShowNavMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', stickyNav);
    return () => window.removeEventListener('scroll', stickyNav);
  }, []);

  useEffect(() => {
    setShowNavMobile(false);
  }, [location]);

  const stickyNav = () => {
    if (window != undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setSticky(true) : setSticky(false);
    }
  };

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  const handleLogOut = async () => {
    await logOut();
    navigate('/');
  };

  return (
    <Fragment>
      <header className={`${sticky && isActive('/') ? 'fixed top-0 left-0 right-0 z-40 py-2' : 'py-6'} container`}>
        <div className={`bg-white rounded-xl h-[68px] px-8 ${sticky ? 'shadow-2xl' : ''}`}>
          <div className='flex items-center justify-between h-full'>
            <div className='logo'>
              <Link to={'/'} className='font-extrabold text-3xl'>
                e<span className='text-blue-600'>Shop</span>
              </Link>
            </div>
            <ul className='hidden lg:flex items-center justify-around h-full'>
              {URL.map((item, index) => (
                <li key={index} className='nav-item mx-6 leading-[68px]'>
                  <Link to={item.path} className={`${isActive(item.path) ? 'active' : ''}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className='flex items-center gap-x-3 justify-end'>
              <li className='cursor-pointer' onClick={() => setShowSearchModal(!showSearchModal)}>
                <BiSearch size={20} />
              </li>
              <li className='cursor-pointer' onClick={() => setShowWishlist(!showWishlist)}>
                <FaRegHeart size={20} />
              </li>
              <li className='cursor-pointer' onClick={() => setShowCart(!showCart)}>
                <FiShoppingCart size={20} />
              </li>
              <li className='cursor-pointer'>
                {user?.email ? (
                  <div onClick={handleLogOut}>
                    <FaSignOutAlt size={20} />
                  </div>
                ) : (
                  <Link to={'/login'}>
                    <BiUser size={20} />
                  </Link>
                )}
              </li>
              <li className='md:hidden block cursor-pointer' onClick={() => setShowNavMobile(!showNavMobile)}>
                <RxHamburgerMenu size={20} />
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* Navbar mobile */}
      <div className={`${showNavMobile ? 'visible' : 'invisible'}`}>
        <div className='fixed top-0 left-0 right-0 bottom-0 w-full bg-gray-600 bg-opacity-60 z-50' onClick={() => setShowNavMobile(false)}>
          <nav
            className={`fixed top-0 right-0 bottom-0 px-10 py-5 bg-white transition-all duration-300 
            ${showNavMobile ? 'w-[60vw] visible opacity-100' : 'translate-x-full invisible opacity-0'}`}
            onClick={(e) => e.stopPropagation()}>
            <div className='flex flex-col h-full'>
              <div className='flex items-center justify-between logo'>
                <Link to={'/'} className='font-extrabold text-3xl'>
                  e<span className='text-blue-600'>Shop</span>
                </Link>
                <div
                  className='btn-close w-[30px] h-[30px] hover:rotate-90 transition-transform duration-200'
                  onClick={() => setShowNavMobile(false)}>
                  <IoIosClose size={30} />
                </div>
              </div>
              <ul className='h-full'>
                {URL.map((item, index) => (
                  <li key={index} className='my-10 text-gray-500'>
                    <Link to={item.path} className={`${isActive(item.path) ? 'active' : ''}`}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <Cart showCart={showCart} setShowCart={setShowCart} />
      <Wishlist showWishlist={showWishlist} setShowWishlist={setShowWishlist} />
      <Search showSearchModal={showSearchModal} setShowSearchModal={setShowSearchModal} />
    </Fragment>
  );
}
