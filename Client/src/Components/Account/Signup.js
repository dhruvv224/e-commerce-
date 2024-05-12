import React from 'react'
import { Link } from 'react-router-dom';
import Signupform from './Signupform';

export const Signup = () => {
  return (
    <div>
        <div className='container my-3'>
            <div className='row border'>
                <div className='col-md-6 bg-light bg-gradient p-3 d-md-block'>
                    <Link to='/' >
                    <img src='../../images/banner/Dell.webp' className='img-fluid'>

</img>
                    </Link>
                    <Link to="/">
            <img
              src="../../images/banner/Laptops.webp"
              alt="..."
              className="img-fluid"
            />
          </Link>
                </div>
                <div className='col-md-6 p-3'>
                    <h4 className='text-center'>Sign Up</h4>
                    <Signupform/>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Signup;