import { type } from "@testing-library/user-event/dist/type";

// In your Redux actions file (e.g., actions/cartActions.js)
export const UPDATE_TOTAL_PRICE = 'UPDATE_TOTAL_PRICE';
export const updateTotalPrice=(TotalPrice)=>({
    type:updateTotalPrice,
    payload:TotalPrice
})