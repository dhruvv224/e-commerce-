import { render } from '@testing-library/react';
import React from 'react'
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
 const renderer=({hours,minutes,seconds})=>{
    return(
        
        <span className='text-muted small'>
        {hours}:{minutes}:{seconds} Left
    </span>
    )
 }
export const CardDealsOfTheDay = (props) => {
  return (
    <div className='card'>
        <div className='card-body'>
            <h5 className='card-title pb-3 border-bottom'>
                {props.title} <i className='bi bi-stopwatch text-primary'>{" "}</i>
                <Countdown date={props.endDate} renderer={renderer}/>
                <span className='float-end'>
                    <Link to={props.to} className='btn btn-sm btn-outline-primary'>
                        View All
                    </Link>
                </span>

            </h5>
            {props.children}
        </div>
       
    </div>
  )
}
export default CardDealsOfTheDay;