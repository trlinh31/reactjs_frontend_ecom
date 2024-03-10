import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useGetAllProducts, useGetProductById } from './useAPI';
import { getRequestSite } from '../api/requestApi';

const WishlistContext = createContext();

export default function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const wishlistLocal = localStorage.getItem('wishlist');
    if (wishlistLocal) {
      const wishlistParse = JSON.parse(wishlistLocal);
      setWishlist(wishlistParse);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (id) => {
    const productIndex = wishlist.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
      const wishlistNew = wishlist.filter((p) => p.id !== id);
      setWishlist(wishlistNew);
      toast.warning('Removed product from wishlist');
    } else {
      getRequestSite('products/' + id).then((data) => {
        setWishlist([...wishlist, data]);
      });
      toast.success('Add to wishlist successfull');
    }
  };

  const checkProductInWishlist = (id) => {
    const productIndex = wishlist.findIndex((p) => p.id === id);
    return productIndex !== -1;
  };

  return <WishlistContext.Provider value={{ wishlist, addToWishlist, checkProductInWishlist }}>{children}</WishlistContext.Provider>;
}

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  return context;
};
