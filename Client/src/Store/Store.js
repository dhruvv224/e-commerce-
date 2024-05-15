import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from './CartSlice';
import CartReducer from "../Reducers/CartReducer";
import SizefilterSlice from "../Slices/SizefilterSlice";
import PriceFilterSlice from "../Slices/PriceFilterSlice";
import ColorFilter from "../Slices/ColorFilter";
import SearchQuerySlice from "../Slices/SearchQuerySlice";
const Store =configureStore({
    reducer:{
        cart:Cartreducer,
        Totalprice:CartReducer,
        SizeFilter:SizefilterSlice,
        PriceFilter:PriceFilterSlice,
        ColorFilter:ColorFilter,
        SearchQuery:SearchQuerySlice

    }
})
export default Store