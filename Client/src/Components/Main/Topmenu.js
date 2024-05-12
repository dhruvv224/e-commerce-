import React from 'react';
import { Link } from 'react-router-dom';
import './Topmenu.css';

const Topmenu = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary p-0'>
      <div className='container-fluid'>
        <Link className="navbar-brand" to="/">
          WOW E-commerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
                All Pages
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className='dropdown-item' to='/account/signin'>Sign In</Link></li>
                <li><Link className='dropdown-item' to='/account/signup'>Sign Up</Link></li>
                <li><hr className='dropdown-divider' /></li>
                <li><Link className='dropdown-item' to='/checkout'>Checkout Page</Link></li>
                <li><Link className='dropdown-item' to='/contact-us'>Contact Us</Link></li>
                <li><Link className='dropdown-item' to='/blog'>Blog</Link></li>
                <li><Link className='dropdown-item' to='/blog/detail'>Blog Detail</Link></li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/fashion' id='navlinks'>Fashion</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/early-access" id='navlinks'>Early Access</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/best-seller" id='navlinks'>Best Seller</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mobiles" id='navlinks'>Mobiles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events-deals" id='navlinks'>Event's Deals</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/prime" id='navlinks'>Prime</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/electronics" id='navlinks'>Electronics</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topmenu;
