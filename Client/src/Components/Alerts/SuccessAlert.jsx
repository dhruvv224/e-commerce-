import React from 'react'
import { useState,useEffect } from 'react'
export const SuccessAlert = () => {
    const[showAlert,setShowAlert]=useState(true);
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setShowAlert(false)

        },2000)
        return()=>clearTimeout(timer)
    },[])
  return (
    <>
    {showAlert &&
    (
        <div className='alert alert-success'>Item has been added</div>
    )}
    </>
  )
}
export default SuccessAlert