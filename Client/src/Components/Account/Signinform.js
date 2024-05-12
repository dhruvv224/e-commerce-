import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { required } from '../Helpers/Validation';
// import { Field, reduxForm } from "redux-form";

export const Signinform = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const[userData,setUserData]=useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
  
    // Validate phone number
    if (!phoneNumber) {
      setPhoneNumberError('Phone number is required');
      hasError = true;
    } else if (phoneNumber.length !== 10) {
      setPhoneNumberError('Phone number length must be 10 digits');
      hasError = true;
    } else {
      setPhoneNumberError('');
    }
  
    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      hasError = true;
    } else {
      setPasswordError('');
    }
  
    // If there are no errors, proceed with form submission
    if (!hasError) {
      // Update userData state array with new user data
      setUserData([...userData, { phoneNumber, password}]);
      console.log('User Data:', userData);
      alert({userData})
  
      // Perform your sign-in logic here
      console.log('Submitting form...');
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Phone Number Field */}
        <p className='text-dark'>Enter Phone no  <span className="text-danger">*</span></p>
        <div className='input-group mb-3'>
          <div className="input-group-prepend">
            <span className="input-group-text" id="phone-addon"><i className='bi bi-phone'></i></span>
          </div>
          <input
            type="text"
            pattern='[0-9]*'
            className="form-control"
            placeholder="Phone Number"
            aria-label="Phone Number"
            aria-describedby="phone-addon"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

        </div>
        {phoneNumberError && <span className="text-danger">{phoneNumberError}</span>}


        {/* Password Field */}
        <p className='text-dark'>Enter Password  <span className="text-danger">*</span></p>
        <div className='input-group mb-3'>
          <div className="input-group-prepend">
            <span className="input-group-text" id="password-addon"><i className='bi bi-lock'></i></span>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="******"
            aria-label="Password"
            aria-describedby="password-addon"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {passwordError && <div className="text-danger">{passwordError}</div>}

        {/* Submit Button */}
        <div className='d-grid'>
          <button className='btn btn-primary mb-3' type='submit'>Log in</button>
        </div>
      </form>

      {/* Links */}
      <Link className='float-start' to='/account/signup' title='Sign up'>Create Your account</Link>
      <Link className='float-end' to='/account/forgotpass' title='forgotpass'>Forgot password ?</Link>

      <div className='clearfix'></div>
      <hr></hr>

      {/* Social Logins */}
      <div className='row'>
        <div className="col- text-center">
          <p className="text-muted small">Or you can join with</p>
        </div>
        <div className='col- text-center'>
          <Link to='/' className='btn btn-dark text white bg-twitter me-3'>
            <i className='bi bi-twitter-x'></i>
          </Link>
          <Link to="/" className="btn btn-danger text-light me-3 bg-google">
            <i className="bi bi-google mx-1" />
          </Link>
          <Link to="/" className="btn btn-primary text-white me-3 bg-facebook">
            <i className="bi bi-facebook mx-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signinform;
