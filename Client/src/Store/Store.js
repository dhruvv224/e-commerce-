import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from './CartSlice';
import CartReducer from "../Reducers/CartReducer";
import SizefilterSlice from "../Slices/SizefilterSlice";
import PriceFilterSlice from "../Slices/PriceFilterSlice";
import ColorFilter from "../Slices/ColorFilter";
import SearchQuerySlice from "../Slices/SearchQuerySlice";
import MyordersSlices from "../Slices/MyordersSlices";
const Store =configureStore({
    reducer:{
        cart:Cartreducer,
        Totalprice:CartReducer,
        SizeFilter:SizefilterSlice,
        PriceFilter:PriceFilterSlice,
        ColorFilter:ColorFilter,
        SearchQuery:SearchQuerySlice,
        Myorder:MyordersSlices

    }
})
export default Store