import React, { useEffect, useState } from 'react'
import { useCont } from '../../Context/Context'


export const CouponApply = ({isPromocode,setisPromocode,PromoCode,setPromocode}) => {
    const CouponCodes=['EXAMPLECODE2024','NEWORDER20P','NEWORDER10P','WOWCODE2024','DHRUV']
    const {Coupon,setCoupon}=useCont()
    // console.log("Promocode applied ?:-",isPromocode)
    // const[Coupon,setCoupon]=useState('')
    // const[CoupanSuccess,setCoupanSuccess]=useState(false)
    const[Validcoupon,setValidcoupon]=useState(false)
    const[CouponError,setCouponError]=useState(false)
    const HandleCoupon=(e)=>{
        e.preventDefault()
       
        {
            const isValidcoupon=CouponCodes.includes(Coupon)
            console.log(isValidcoupon)
            if (isValidcoupon)
            {
                setisPromocode(true)
                setValidcoupon(isValidcoupon)

            }
            else
            {
                setCouponError(true)
                
            }
           
            

        }
       


    }
    useEffect(()=>{
        console.log(Coupon)

    },[Coupon])
    // const{handlesubmit}=props
  return (
    <div>
        <input className='form-control' type='text' placeholder='Enter Coupon code' value={Coupon} onChange={(e)=>setCoupon(e.target.value.toUpperCase())}     style={{ textTransform: 'uppercase' }} // Display entered text in uppercase
></input>
{
    (CouponError || Validcoupon) && (
        <>
            {CouponError && !Validcoupon && <span className='text-danger'>Coupon is Not valid</span>}
            {!CouponError && Validcoupon && <span className='text-success'>Coupon applied successfully</span>}
        </>
    )
}


        <button className='btn btn-sm btn-primary mt-2 float-end' type='submit' onClick={HandleCoupon} >Apply</button>
    </div>
  )
}
export default CouponApply;