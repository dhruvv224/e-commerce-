import React from 'react'
import { Link } from 'react-router-dom';

export const CardImage = (props) => {
  return (
    <div>
        <Link to={props.to}>
            <div className='card shadow-sm'>
                <div className='card-body p-0'>
                    <img src={props.src} className='img-fluid rounded'></img>
                </div>
            </div>
        </Link>
    </div>
  )
}
export default CardImage;