import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

const cartReducer = (state, action) => {
  const cartUpdate = [...state.cartItems];
  const index = state.cartItems.findIndex((p) => p.id === action.payload && p.size == action.size);
  switch (action.type) {
    case 'ADD_TO_CART':
      const existProduct = state.cartItems.findIndex((p) => p.id === action.payload.id && p.size === action.size);
      if (existProduct !== -1) {
        cartUpdate[existProduct] = {
          ...cartUpdate[existProduct],
          quantity: cartUpdate[existProduct].quantity + 1,
        };
        return {
          ...state,
          cartItems: cartUpdate,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1, size: action.size }],
        };
      }
    case 'INCRE_QUANTITY':
      cartUpdate[index] = {
        ...cartUpdate[index],
        quantity: cartUpdate[index].quantity + 1,
      };
      return {
        ...state,
        cartItems: cartUpdate,
      };
    case 'DECRE_QUANTITY':
      if (cartUpdate[index].quantity === 1) {
        const newCart = state.cartItems.filter((p) => p.id !== action.payload.id && p.size !== action.size);
        return {
          ...state,
          cartItems: newCart,
        };
      } else {
        cartUpdate[index] = {
          ...cartUpdate[index],
          quantity: cartUpdate[index].quantity - 1,
        };
        return {
          ...state,
          cartItems: cartUpdate,
        };
      }
    case 'DELETE_CART_ITEM':
      const newCart = state.cartItems.filter((p) => p.id !== action.payload.id && p.size !== action.size);
      return {
        ...state,
        cartItems: newCart,
      };
    case 'RESTORE_CART':
      return {
        ...state,
        cartItems: action.payload.cartItems,
      };
    default:
      throw new Error('Action not found');
  }
};

export default function CartProvider({ children }) {
  const initState = {
    cartItems: [],
  };

  const [cartState, dispatch] = useReducer(cartReducer, initState);

  const handleAddToCart = (product, size) => {
    if (!size) {
      toast.error('Please select size');
    } else {
      dispatch({
        type: 'ADD_TO_CART',
        payload: product,
        size: size,
      });
      toast.success('Added product successfully');
    }
  };

  const handleDeleteCartItem = (productId, size) => {
    dispatch({ type: 'DELETE_CART_ITEM', payload: productId, size: size });
  };

  const handleIncrement = (productId, size) => {
    dispatch({ type: 'INCRE_QUANTITY', payload: productId, size: size });
  };

  const handleDecrement = (productId, size) => {
    dispatch({ type: 'DECRE_QUANTITY', payload: productId, size: size });
  };

  return (
    <CartContext.Provider value={{ cartState, handleAddToCart, handleIncrement, handleDecrement, handleDeleteCartItem }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
