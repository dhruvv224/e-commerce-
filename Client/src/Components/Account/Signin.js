import React from 'react'
import { Link } from 'react-router-dom'
import Signinform from './Signinform'
export const Signin = () => {
  return (
    <div>
        <div className='container my-3'>
            <div className='row border'>
                <div className='col-md-6 bg-light bg-gradient p-3 d-md-block'>
                    <Link to='/'>
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
            <h4 className='text-center'>Sign In</h4>
            <Signinform/>
            

          </div>
            </div>
        </div>

    </div>
  )
}
export default Signin