import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from './CartSlice';
import CartReducer from "../Reducers/CartReducer";
const Store =configureStore({
    reducer:{
        cart:Cartreducer,
        Totalprice:CartReducer

    }
})
export default Store