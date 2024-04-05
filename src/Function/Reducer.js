import { ADD_TO_CART, REMOVE_FROM_CART } from './Actions';

const initialState = {
  Products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
        const existingProduct = state.Products.find(item => item.id === action.payload.id);
        if(!existingProduct){
            return {
              ...state,
              Products: [...state.Products, action.payload],
            };
        }
    case REMOVE_FROM_CART:
      return {
        ...state,
        Products: state.Products.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
