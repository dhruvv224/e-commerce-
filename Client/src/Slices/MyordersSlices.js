import { createSlice } from "@reduxjs/toolkit";
// import Orders from "../Components/My orders/Orders";
const initialState={
    myOrders:[]
}
const MyordersSlice=createSlice({
    initialState,
    name:'Myorder',
    reducers:{
        setMyOrder:(state,aciton)=>{
            state.myOrders=(aciton.payload)
        }
    }
})
export const {setMyOrder}=MyordersSlice.actions
export default MyordersSlice.reducer

