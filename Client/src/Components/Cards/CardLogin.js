import React from 'react'
import { Link } from 'react-router-dom';

export const CardLogin = () => {
  return (
    <div className='card shadow-sm'>
        <div className='card-body text-center'>
            <h5 className='card-title'>Sign in For better experience</h5>
            <Link to='account/signin' className='btn btn-warning'>
                Sign in securely
            </Link>
        </div>
    </div>
  )
}
export default CardLogin;