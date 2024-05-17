import React from 'react'
import { createContext,useState,useContext } from 'react'
const Context =createContext()

export const ContextProvider = ({children}) => {
    const [Itemadded,setItemAdded]=useState(false)
    const[Finaltotal,setFinaltotal]=useState(0)
    const[Coupon,setCoupon]=useState('')
    const[Popup,setPopup]=useState(false)
    const[FilterApplied,setFilterApplied]=useState(false)
    const[SearchApplied,setSearchApplied]=useState(false)

  return (
    <Context.Provider value={{Itemadded,setItemAdded,Finaltotal,setFinaltotal,Coupon,setCoupon,Popup,setPopup,setFilterApplied,FilterApplied,SearchApplied,setSearchApplied}}>
        {children}
    </Context.Provider>
  )
}
export  const useCont=()=>useContext(Context)
