
// actions.js
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (Product) => ({
  type: ADD_TO_CART,
  payload: Product,
});

export const removeFromCart = (ProductId) => ({
  type: REMOVE_FROM_CART,
  payload: ProductId,
});
 