import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    selectedPrice:[],
}
const PriceFilterSlice=createSlice({
    name:'PriceFilter',
    initialState,
    reducers:{
        setSelectedPrice:(state,action)=>{
            state.selectedPrice=(action.payload)
        }
    }
})
export const {setSelectedPrice}=PriceFilterSlice.actions
export default PriceFilterSlice.reducer