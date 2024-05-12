import React from 'react';
import products from '../Data/Products';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../../Store/CartSlice';

export const CardProductsGrid = ({ data }) => {
  const { img, isNew, isHot, discountPercentage, discountPrice,link,name,price,originPrice ,star,id} = data;
  const dispatch=useDispatch()
  const handleAddtocart=()=>{
    dispatch(add(data))
    
  }
  const Buynow=()=>
  {
    dispatch(add(data))
  }
  return (
    <div className='card position-relative'>
      <img src={img} className='card-img-top' alt='Product'></img>
      
      {isNew && (
        <span className="badge bg-success position-absolute top-0 start-0 m-2">
          New
        </span>
      )}

      {isHot && (
        <span className="badge bg-danger position-absolute top-0 end-0 m-2">
          Hot
        </span>
      )}

      {(discountPercentage > 0 || discountPrice > 0) && (
        <span className={`badge bg-warning position-absolute bottom-1 start-0 m-2 ${isNew ? "mt-5" : "mt-2"}`}>
          -{discountPercentage > 0 ? `${discountPercentage}%` : `$${discountPrice}`}
        </span>
      )}
      <div className='card-body'>
        <h6 className='card-subtitle mb-1'>
            <Link className="text-decoration-none" to={link}>
                {name}
            </Link>
        </h6>
        <div className='my-6'>
            <span className='fw-bold h5'>{price}₹</span>
            {originPrice >0 &&(
                <del className='small text-muted ms-2'>{originPrice}₹</del>
            )}
            <span className='ms-2'>
                {Array.from({length:star},(_,key)=>(
                    <i className='bi bi-star-fill text-warning me-1' key={key}/>
                ))}
            </span>
        </div>
        <div className='btn-group d-flex' role='group'>
            <button type='button' className='btn btn-sm btn-primary'onClick={handleAddtocart}>
                Add
            <i className="bi bi-cart-plus" />

            </button>
          
            <Link className='btn btn-sm btn-outline-success' to='/Checkout'onClick={Buynow}>
                Buy now
               
            </Link>
        

        </div>
      </div>
    </div>
  );
};

export default CardProductsGrid;
