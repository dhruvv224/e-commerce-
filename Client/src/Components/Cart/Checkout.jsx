import React from 'react'
import { connect, useSelector } from 'react-redux';
import products from '../Data/Products';
import { useCont } from '../../Context/Context';
export const Checkout = () => {
    const items=useSelector((state)=>state.cart)
    console.log(items)
   const{Finaltotal}=useCont()

   console.log(Finaltotal)

    
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
                            <i className='bi bi-envelope'></i> Contact info
                        </div>
                        <div className='card-body'>
                        <div className='row g-3'>
                            <div className='col-md-6'>
                                <input type='text' className='form-control' placeholder='Enter your Email'></input>
                            </div>
                            <div className='col-md-6'>
                                <input type='text' className='form-control' placeholder='Enter phone no'></input>
                            </div>
                         </div>
                        </div>
                    </div>
                    <div className='card mb-3'>
                    <div className='card-header'>
                        <i className='bi bi-truck'> Shipping Information</i>
                    </div>
                    <div className='card-body'>
                        <div className='col-md-12 mb-3'>
                            <input type='text' className='form-control' placeholder='Mobile no'>

                            </input>
                        </div>
                        <div className='row g-3'>
                            <div className='col-md-6'>
                                <input type='text' className='form-control' placeholder='Address'>

                                </input>
                            </div>
                            <div className='col-md-6'>
                                <input type='text' className='form-control' placeholder='Address 2(optional)'>

                                </input>
                            </div>
                            <div className='col-md-4'>
                            <select className='form-select' required>
                                <option value>---Country---</option>
                                <option>United States</option>
                                <option>India</option>

                            </select>
                        </div>
                        <div className='col-md-4'>
                            <select className='form-select' required>
                                <option value>---States---</option>
                                <option>Los Angelos</option>
                                <option>Gujrat</option>
                                <option>Maharastra</option>
                            </select>
                        </div>
                        <div className='col-md-4'>
                            <input type='tel' className='form-control' placeholder='Zip'></input>
                        </div>
                        </div>
                       
                    </div>
                   
                </div>
                <div className='card mb-3'>
                        <div className='card-header'>
                            <i className='bi bi-receipt'></i> Billing information  
                            <div className="form-check form-check-inline ms-3">

                            <input type='checkbox' className='form-check-input' defaultValue id="flexCheckDefault"/> <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Same as Shipping Infomation
                  </label>
                  </div>
                  
                        </div>
                        <div className='card-body'>
                    <div className='col-md-12 mb-3'>
                        <input className='form-control' type='text' placeholder='Name'>

                        </input>
                    </div>
                    <div className='row g-3'>
                        <div className='col-md-6'>
                            <input type="text" className='form-control' placeholder='Address' />
                        </div>
                        <div className='col-md-6'>
                            <input type="text" className='form-control' placeholder='Address 2(optional)' />
                        </div>
                        <div className='col-md-4'>
                            <select className='form-select' required>
                                <option value>---Country---</option>
                                <option>United States</option>
                            </select>
                            
                        </div>
                        <div className="col-md-4">
                    <select className="form-select" required>
                      <option value>-- State --</option>
                      <option>California</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip"
                      required
                    />
                  </div>
                  </div>
                  
                            
                    </div>

                </div>
              <div className='card mb-3 border-primary'>
                <div className='card-header bg-primary text-white'>
                    <i className='bi bi-credit-card-2-front '></i> Payment Method

                </div>
                <div className='card-body'>
                    <div className='row g-3 mb-3 border-bottom'>
                        <div className='col-md-6'>
                            <div className='form-check'>
                                <input type='radio' id='credit' className='form-check-input' name='PaymentMethod' defaultChecked required/>
                                    <label className='form-check-label' htmlFor='credit'>Credit Card  <img src="../../images/payment/cards.webp" alt="..." className="ms-3 mb-2" height={26} /></label>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-check'>
                            <input type='radio' id='paypal' className='form-check-input' name='PaymentMethod'/>
                            <label className='form-check-label' htmlFor='paypal'>Paypal
                            <img
                          src="../../images/payment/paypal_64.webp"
                          alt="..."
                          className="ms-3"
                          height={26}
                        />
                            </label>
                                
                            </div>
                        </div>
                        
                    </div>
                    <div className='row g-3'>
                    <div className='col-md-6'>
                            <input className='form-control' type='text' placeholder='Name of card'/>
                   </div>
                   <div className='col-md-6'>
                    <input className='form-control' type='tel' placeholder='Card-number'/>
                   </div>
                   <div className='col-md-4'>
                    <input className='form-control' type='text' placeholder='Expiry Month'/>
                   </div>
                   <div className='col-md-4'>
                    <input className='form-control' type='text' placeholder='Expiry Year'/>
                   </div>
                   <div className='col-md-4'>
                    <input className='form-control' type='text' placeholder='CVV'/>
                   </div>
             </div>
                </div>
                <div className='card-footer border-primary d-grid'>
                    <button className='btn btn-primary' type='button'>Pay now {Finaltotal}₹</button>

                </div>
              </div>
            </div>
            <div className='col-md-4'>
                <div className='card mb-3'>
                    <div className='card-header'>
                        <i className='bi bi-cart float-start'>Cart</i>
                        <span className='badge bg-secondary float-end'>{items.length}</span>
                    </div>
                    <div className='card-body'>
                        {items.map((product,index)=>(
                            <div key={index} className='border-bottom'>
                                <h6 className='border-bottom'>{product.name}
                                <span className='text-dark float-end mb-3'>{product.price} ₹</span>
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
  )
}
export default Checkout;