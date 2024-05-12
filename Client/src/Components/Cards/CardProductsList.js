import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../../Store/CartSlice'
import { ContextProvider } from '../../Context/Context'
import { useCont } from '../../Context/Context'
export const CardProductsList = ({ data }) => {

    const {setItemAdded,Itemadded}=useCont()
    // const[Itemadded,setItemAdded]=useState(false)
    const dispatch=useDispatch()
    const[cartItems,setCartitems]=useState([])
    if (!data) return null; // Handle the case when data is not available

    const { img, link, name, isNew, isHot, star, description ,price,originPrice,discountPercentage,discountPrice,isFreeShipping} = data;
    const handleAddtocart=()=>{
        // setCartitems(data)
        setItemAdded(true)
        console.log(Itemadded)
        
        dispatch(add(data))
        alert("item added")
        // console.log(data)
        console.log("Added to cart",cartItems)
        // dispatch(data)
        
    }

    const Buynow=()=>
    {
        dispatch(add(data))

    }

    return (
        <div className='card'>
            <div className='row g-0'>
                <div className='col-md-3 text-center'>
                    <img src={img} className='img-fluid' alt={name}></img>
                </div>
                <div className='col-md-6'>
                    <div className='card-body'>
                        <h6 className='card-subtitle me-2 d-inline'>
                            <Link to={link} className='text-decoration-none'>
                                {name}
                            </Link>
                        </h6>
                        {isNew && (
                            <span className="badge bg-success me-2">New</span>
                        )}
                        {isHot && <span className="badge bg-danger me-2">Hot</span>}
                        <div>
                            {star > 0 &&
                                Array.from({ length: 5 }, (_, key) => {
                                    if (key <= star)
                                        return (
                                            <i key={key} className='bi bi-star-fill text-warning'></i>
                                        )
                                    else
                                        return (
                                            <i key={key} className='bi bi-star-fill text-secondary'></i>
                                        )
                                })}
                        </div>
                        {description &&
                            
                                <p className='small mt-2'>{description}</p>
                            }
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card-body'>
                        <div className='mb-2'>
                            <span className='fw-bold h5'>{price}₹</span>
                            {originPrice >0 &&(
                                <del className='small text-muted ms-2'>
                                    {originPrice}
                                </del>
                            )}
                           {(discountPercentage>0 ||
                        discountPrice >0 )&&(
                            <span className={`rounded p-1 bg-warning ms-2 small`}>
                                -{
                                    discountPercentage>0 ?discountPercentage + "%": "₹" +discountPrice
                                }
                            </span>
                        )}
                        </div>
                        {isFreeShipping &&(
                            <p className='text-success small mb-2 fw-bold h7'>
                                <i className='bi bi-truck'>Free shipping</i>
                            </p>
                        )}
                        <div className='btn-group d-flex' role='group'>
                            <button className='btn btn-sm btn-primary' onClick={handleAddtocart}>
                                Add to Cart <i className='bi bi-cart-plus'></i>
                            </button>
                            <Link className='btn btn-outline-success' type='button' to='/Checkout' onClick={Buynow}>Buy now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProductsList;
