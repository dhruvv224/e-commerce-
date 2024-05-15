import {createSlice} from '@reduxjs/toolkit'
const initialState={
    selectedSize:[],
}
const SizefilterSlice=createSlice({
    name:'sizeFilter',
    initialState,
    reducers:{
        setSelectedSizes:(state,action)=>{
            state.selectedSize=action.payload
        },
    },
})
export const {setSelectedSizes}=SizefilterSlice.actions
export default SizefilterSlice.reducer