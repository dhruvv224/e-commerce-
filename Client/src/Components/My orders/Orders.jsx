import { current } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from 'react-redux'
export const Orders = () => {
const{myOrders}=useSelector((state)=>state.Myorder)
const CurrDate=new Date()
console.log(CurrDate)
const formattedDate = `${CurrDate.getDate()}/${CurrDate.getMonth()+1}/${CurrDate.getFullYear()}`;

console.log(myOrders)
  return (
    <div>

    <div className='container mb-3'>
    <h4 className='my-3'>Orders</h4>
    <div className='row g-3'>
    {myOrders.map((product,index)=>(
        <div className='col-md-6'key={index}>
            <div className='card'>
                <div className='row g-0'>
                    <div className='col-md-3 text-center'>
                        <img src={product.img} className='img-fluid'></img>
                        </div>
                    <div className='col-md-9'>
                    <div className='card-header'>
                    <div className='small'>
                    <span className='border bg-secondary rounded-left px-2 text-white'>
                    Order Id
                    </span>
                    <span className='border bg-white rounded-left px-2 text-dark'>
                    #123453
                    </span>
                    <span className='border bg-secondary rounded-left px-2 text-white'>
                    Date
                    </span>
                    <span className='border bg-white rounded-left px-2 text-dark'>
                    {formattedDate}
                    </span>
                    </div>
                    </div>
                    <div className='card-body'>
                        <h6>{product.name}</h6>
                    </div>
                    <div className='small'>
                        <span className='text-muted me-3'>Size:</span>
                        <span className='me-3'>{product.Size}</span>
                        <span className='text-muted me-3'>Price:</span>
                        <span className='me-3'>{product.price}₹</span>
                        <span className='me-3'>Color:  

                        <span className='px-2 rounded' style={{backgroundColor:`${product.color}`,width:'100px',marginLeft:'10px'}}></span>

                        </span>

                        </div>
                        <div className='mt-2'>
                            <div className='card-footer justify-content-between'>
                                <span className='me-2'>Status:</span>
                                <span className='text-success'>
                                <i className='bi bi-check-circle-fill me-1'> Completed</i>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
         ))}
    </div>
</div>

   
    </div>
  )
}
export default Orders