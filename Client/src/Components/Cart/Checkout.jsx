import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCont } from '../../Context/Context';
import { setMyOrder } from '../../Slices/MyordersSlices';
import { Link } from 'react-router-dom';

export const Checkout = () => {
  const items = useSelector((state) => state.cart);
  const { myOrders } = useSelector((state) => state.Myorder);
  const dispatch = useDispatch();
  const { Finaltotal } = useCont();

  const [contactInfo, setContactInfo] = useState({
    email: '',
    phoneno: ''
  });

  const [sameAsShipping, setSameAsShipping] = useState(false);

  const [shippingInfo, setShippingInfo] = useState({
    mobileno: '',
    address1: '',
    address2: '',
    country: '',
    state: '',
    zip: ''
  });

  const [billingInfo, setBillingInfo] = useState({
    name: '',
    address1: '',
    address2: '',
    country: '',
    state: '',
    zip: ''
  });

  const handleCheckbox = (e) => {
    setSameAsShipping(e.target.checked);
    if (e.target.checked) {
      setBillingInfo(shippingInfo);
    }
  };

  const onContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const onShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
    if (sameAsShipping) {
      setBillingInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  const onBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const payNow = () => {
    dispatch(setMyOrder(items));
  };

  return (
    <div>
      <div className='bg-secondary border-top p-4 mb-3'>
        <h1 className='display-6'>Checkout</h1>
      </div>
      <div className='container mb-3'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='card mb-3'>
              <div className='card-header'>
                <i className='bi bi-envelope'></i> Contact Info
              </div>
              <div className='card-body'>
                <div className='row g-3'>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter your Email'
                      name='email'
                      value={contactInfo.email}
                      onChange={onContactChange}
                    />
                  </div>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter phone no'
                      name='phoneno'
                      value={contactInfo.phoneno}
                      onChange={onContactChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='card mb-3'>
              <div className='card-header'>
                <i className='bi bi-truck'></i> Shipping Information
              </div>
              <div className='card-body'>
                <div className='col-md-12 mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Mobile No'
                    name='mobileno'
                    value={shippingInfo.mobileno}
                    onChange={onShippingChange}
                  />
                </div>
                <div className='row g-3'>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Address'
                      name='address1'
                      value={shippingInfo.address1}
                      onChange={onShippingChange}
                    />
                  </div>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Address 2 (optional)'
                      name='address2'
                      value={shippingInfo.address2}
                      onChange={onShippingChange}
                    />
                  </div>
                  <div className='col-md-4'>
                    <select
                      className='form-select'
                      required
                      name='country'
                      value={shippingInfo.country}
                      onChange={onShippingChange}
                    >
                      <option value=''>---Country---</option>
                      <option>United States</option>
                      <option>India</option>
                    </select>
                  </div>
                  <div className='col-md-4'>
                    <select
                      className='form-select'
                      required
                      name='state'
                      value={shippingInfo.state}
                      onChange={onShippingChange}
                    >
                      <option value=''>---States---</option>
                      <option>Los Angeles</option>
                      <option>Gujarat</option>
                      <option>Maharashtra</option>
                    </select>
                  </div>
                  <div className='col-md-4'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Zip'
                      name='zip'
                      value={shippingInfo.zip}
                      onChange={onShippingChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='card mb-3'>
              <div className='card-header'>
                <i className='bi bi-receipt'></i> Billing Information
                <div className='form-check form-check-inline ms-3'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='flexCheckDefault'
                    checked={sameAsShipping}
                    onChange={handleCheckbox}
                  />
                  <label
                    className='form-check-label'
                    htmlFor='flexCheckDefault'
                  >
                    Same as Shipping Information
                  </label>
                </div>
              </div>
              <div className='card-body'>
                <div className='col-md-12 mb-3'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={billingInfo.name}
                    onChange={onBillingChange}
                    disabled={sameAsShipping}
                  />
                </div>
                <div className='row g-3'>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Address'
                      onChange={onBillingChange}
                      name='address1'
                      value={billingInfo.address1}
                      disabled={sameAsShipping}
                    />
                  </div>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      className='form-control'
                      onChange={onBillingChange}
                      value={billingInfo.address2}
                      name='address2'
                      placeholder='Address 2 (optional)'
                      disabled={sameAsShipping}
                    />
                  </div>
                  <div className='col-md-4'>
                    <select className='form-select' name='country' value={billingInfo.country} onChange={onBillingChange} required disabled={sameAsShipping}>
                      <option value=''>---Country---</option>
                      <option>United States</option>
                      <option>india</option>

                    </select>
                  </div>
                  <div className='col-md-4'>
                    <select className='form-select' name='state' onChange={onBillingChange} value={billingInfo.state} required disabled={sameAsShipping}>
                      <option value=''>---State---</option>
                      <option>California</option>
                      <option>Los Angeles</option>
                      <option>Gujarat</option>


                    </select>
                  </div>
                  <div className='col-md-4'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Zip'
                      value={billingInfo.zip}
                      name='zip'
                      onChange={onBillingChange}
                      required
                      disabled={sameAsShipping}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='card mb-3 border-primary'>
              <div className='card-header bg-primary text-white'>
                <i className='bi bi-credit-card-2-front'></i> Payment Method
              </div>
              <div className='card-body'>
                <div className='row g-3 mb-3 border-bottom'>
                  <div className='col-md-6'>
                    <div className='form-check'>
                      <input
                        type='radio'
                        id='credit'
                        className='form-check-input'
                        name='PaymentMethod'
                        defaultChecked
                        required
                      />
                      <label className='form-check-label' htmlFor='credit'>
                        Credit Card
                        <img
                          src='../../images/payment/cards.webp'
                          alt='...'
                          className='ms-3 mb-2'
                          height={26}
                        />
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-check'>
                      <input
                        type='radio'
                        id='paypal'
                        className='form-check-input'
                        name='PaymentMethod'
                      />
                      <label className='form-check-label' htmlFor='paypal'>
                        Paypal
                        <img
                          src='../../images/payment/paypal_64.webp'
                          alt='...'
                          className='ms-3'
                          height={26}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className='row g-3'>
                  <div className='col-md-6'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Name on Card'
                    />
                  </div>
                  <div className='col-md-6'>
                    <input
                      className='form-control'
                      type='tel'
                      placeholder='Card Number'
                    />
                  </div>
                  <div className='col-md-4'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Expiry Month'
                    />
                  </div>
                  <div className='col-md-4'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Expiry Year'
                    />
                  </div>
                  <div className='col-md-4'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='CVV'
                    />
                  </div>
                </div>
              </div>
              <div className='card-footer border-primary d-grid'>
                <Link to='/Myorder'>
                  <button
                    className='btn btn-primary'
                    type='button'
                    onClick={payNow}
                  >
                    Pay Now {Finaltotal}₹
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card mb-3'>
              <div className='card-header'>
                <i className='bi bi-cart float-start'>Cart</i>
                <span className='badge bg-secondary float-end'>
                  {items.length}
                </span>
              </div>
              <div className='card-body'>
                {items.map((product, index) => (
                  <div key={index} className='border-bottom'>
                    <h6 className='border-bottom'>
                      {product.name}
                      <span className='text-dark float-end mb-3'>
                        {product.price} ₹
                      </span>
                    </h6>
                    <h6 className='mt-3'>
                      Total
                      <span className='text-dark float-end'>{Finaltotal}</span>
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
