import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Signupform = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [userData, setUserData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!firstName) {
      setFirstNameError('This field is required');
      hasError = true;
    } else {
      setFirstNameError('');
    }

    if (!lastName) {
      setLastNameError('This field is required');
      hasError = true;
    } else {
      setLastNameError('');
    }

    if (!mobileNumber) {
      setPhoneNumberError('Mobile number is required');
      hasError = true;
    } else if (mobileNumber.length !== 10) {
      setPhoneNumberError('Enter a valid mobile number');
      hasError = true;
    } else {
      setPhoneNumberError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (!hasError) {
      setUserData([...userData, { password, mobileNumber, firstName, lastName }]);
      console.log(userData);
      alert(userData)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='row mb-3'>
          <div className='col-md-6'>
            <p className='text-dark'>First Name <span className="text-danger">*</span></p>
            <input type='text' name='firstName' placeholder='Firstname' className='form-control' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            {firstNameError && <span className='text-danger'>{firstNameError}</span>}
          </div>
          <div className='col-md-6'>
            <p className='text-dark'>Last Name <span className="text-danger">*</span></p>
            <input type='text' name='lastName' placeholder='Lastname' className='form-control' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            {lastNameError && <span className='text-danger'>{lastNameError}</span>}
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-md-6'>
            <p className='text-dark'>Mobile No <span className="text-danger">*</span></p>
            <input type='text' placeholder='Enter phone no' className='form-control' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
            {phoneNumberError && <span className='text-danger'>{phoneNumberError}</span>}
          </div>
          <div className='col-md-6'>
            <p className='text-dark'>Password <span className="text-danger">*</span></p>
            <input type='password' placeholder='Enter password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
            {passwordError && <span className='text-danger'>{passwordError}</span>}
          </div>
        </div>
        <div className='d-grid'>
          <button className='btn btn-primary mb-3' type='submit'>Create Account</button>
        </div>
      </form>
      <Link className='float-start' to='/account/signin' title='Sign up'>Sign in</Link>
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

export default Signupform;
