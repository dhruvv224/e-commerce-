import { UPDATE_TOTAL_PRICE, updateTotalPrice } from "../Actions/CartActions";
const initialState = {
    // other state properties
    totalPrice:0,
  };
export const CartReducer=(state=initialState,action)=>{
    
  
  switch (action.type) {
    case UPDATE_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };
    default:
      return state;
  }
}
export default CartReducer;