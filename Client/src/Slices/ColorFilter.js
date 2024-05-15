import { createSlice } from "@reduxjs/toolkit";
const initialState={
    SelectedColor:[]
}
const ColorFilter=createSlice({
    initialState,
    name:"ColorFilter",
    reducers:{
        setSelectedColor:(state,action)=>{
            state.SelectedColor=(action.payload)
        }
    }
})
export const {setSelectedColor}=ColorFilter.actions
export default ColorFilter.reducer