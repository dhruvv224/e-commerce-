import React from 'react'
import { createContext,useState,useContext } from 'react'
const Context =createContext()

export const ContextProvider = ({children}) => {
    const [Itemadded,setItemAdded]=useState(false)
    const[Finaltotal,setFinaltotal]=useState(0)
    const[Coupon,setCoupon]=useState('')

  return (
    <Context.Provider value={{Itemadded,setItemAdded,Finaltotal,setFinaltotal,Coupon,setCoupon}}>
        {children}
    </Context.Provider>
  )
}
export  const useCont=()=>useContext(Context)
