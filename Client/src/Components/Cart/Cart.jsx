import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../../Store/CartSlice';
import CouponApply from '../Others/CouponApply';
import products from '../Data/Products';
import { updateTotalPrice } from '../../Actions/CartActions';
import { useCont } from '../../Context/Context';
const Cart = () => {
    const{setFinaltotal,Coupon}=useCont()
    const [itemCounts, setItemCounts] = useState({});
    const [PromoCode,setPromocode]=useState('')
    const[isPromocode,setisPromocode]=useState(false)
    const items=useSelector((state)=>state.cart)
    const Discount=10
    const Promocode=0
    const cartItems=items.length
    console.log("total items are:",cartItems)
    // const[itemadded,setItemadded]=useState(false)
    // if(cartItems>0)
    // {
    //     setItemadded(true)
    //     console.log(itemadded)
    // }
    const dispatch = useDispatch();
    const Products = useSelector(state => state.cart);
    const [Totalprice,setTotalprice]=useState(0)
    const[Total,setTotal]=useState(0)
    useEffect(()=>{
        const InitialCount={}
        Products.map(product=>{
            InitialCount[product.id]=1
        })
        setItemCounts(InitialCount)
    },[Products])
    useEffect(() => {
        let total = 0;
    
        Products.forEach(product => {
            const quantity = itemCounts[product.id] || 0;
            total += product.price * quantity;
        });
    
        // Apply initial discount of 10%
        let discount = (total * 10) / 100;
        let finalTotal = total - discount;
    
        // Apply additional discount if isPromocode is true
        if (isPromocode) {
            discount += (finalTotal * 5) / 100;
            finalTotal -= discount;
        }
    
        setTotalprice(finalTotal.toFixed(2));
        setFinaltotal(finalTotal.toFixed(2))
        setTotal(total)
        // useDispatch(updateTotalPrice(finalTotal.toFixed(2)))
    
    }, [Products, itemCounts, Discount, isPromocode, PromoCode,dispatch]);
    useEffect(()=>{

        dispatch(updateTotalPrice(Totalprice))
    },[Totalprice,dispatch])
    const handleIncrement = (productId) => {
        setItemCounts(prevCounts => ({
            ...prevCounts,
            [productId]: (prevCounts[productId] || 0) + 1
        }));
    };

    const handleDecrement = (productId) => {
        const newCount = Math.max((itemCounts[productId] || 1) -1, 0);
        setItemCounts(prevCounts => ({
            ...prevCounts,
            [productId]: newCount
        }));
        if (newCount === 0) {
            removeItem(productId);
        }
    };

    const removeItem = (productId) => {
        dispatch(remove(productId));
    };
    console.log('total products are',Products.length)

  
    return (
        <div>
            {Products.length >0 ? (
                <div>

            
            <div className='bg-secondary p-4 text-white mb-4'>
                <h2 className='display-6'>Shopping Cart</h2>
            </div>
            <div className='container mb-3'>
                <div className='row'>
                    <div className='col-md-9'>
                        <div className='card'>
                            <div className='table-responsive'>
                                <table className='table table-borderless'>
                                    <thead className='text-muted'>
                                        <tr className='small text-uppercase'>
                                            <th scope='col'>Product</th>
                                            <th scope='col' width={120}>Quantity</th>
                                            <th scope='col' width={150}>Price</th>
                                            <th scope="col" className="text-end" width={130}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Products.map((product, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div className='row'>
                                                        <div className='col-3 d-none d-md-block'>
                                                            <img src={product.img} alt={product.name} width="100" />
                                                        </div>
                                                        <div className='col'>
                                                            <Link to={product.to} className='text-decoration-none'>{product.name}</Link>
                                                            <p className='small text-muted h4'>Size:{product.Size}, Color:{product.color}, Brand:{product.Brand}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='input-group input-group-sm mw-140'>
                                                        <button className='btn btn-primary text-white' type='button' onClick={() => handleDecrement(product.id)}>
                                                            <i className='bi bi-dash-lg'></i>
                                                        </button>
                                                        <input className='form-control' type='text' value={itemCounts[product.id]} readOnly />
                                                        <button className='btn btn-primary text-white' type='button' onClick={() => handleIncrement(product.id)}>
                                                            <i className='bi bi-plus-lg'></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td> 
                                                    <var className="price">{product.price}₹</var>
                                                    <small className='d-block text-muted'></small>
                                                </td>
                                                <td className='text-end'>
                                                    <button className='btn btn-sm btn-outline-danger me-2'>
                                                        <i className='bi bi-heart-fill'></i>
                                                    </button>
                                                    <button className='btn btn-sm btn-outline-secondary me-2' onClick={() => removeItem(product.id)}>
                                                        <i className='bi bi-trash' ></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    
                                </table>
                                <div className='card-footer'>
                <Link to='/checkout' className='btn btn-primary float-end 'style={{marginBottom:'10px'}}>
                    Make purchase <i className='bi bi-chevron-right'></i>
                </Link>
                <Link style={{marginBottom:'10px'}} className='btn btn-outline-dark float-start' to='/fashion'>
                    <i className='bi bi-chevron-left'></i> Back to Shopping
                </Link>
            </div>
                            </div>
                        </div>
                        <div className='alert alert-success mt-3'>
                            <p className='m-0'>
                                <i className='bi bi-truck'>Free Delivery within 1-2 week</i>
                            </p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='card mb-3'>
                            <div className='card-body'>Have a Coupon ?<span className='text-danger'> *</span>
                            <CouponApply isPromocode={isPromocode} setisPromocode={setisPromocode} PromoCode={PromoCode} setPromocode={setPromocode}/>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-body'>
                                <dl className='row border-bottom'>
                                    <dt className='col-6'>Total price</dt>
                                    <dd className='col-6 text-end'>{Total}</dd>
                                    <dt className='col-6 text-success'>Discount</dt>
                                    <dd className='col-6 text-success text-end'>-10%</dd>
                                    <dt className={` ${isPromocode ? 'col-6 text-success' : 'd-none'}`}>
                                     Coupon:
                                    <br/>
                                    <span className={`${isPromocode ? 'small text-muted' : 'd-none'}`}>{Coupon}</span>
                                    </dt>
                                    <dd className={` ${isPromocode ? 'col-6 text-success text-end' :'d-none'}`}>-20%</dd>
                                     </dl>
                                <dl className='row'>
                                    <dt className='col-6'>Total</dt>
                                    <dd className='col-6 text-end h5'>
                                        <strong>{Totalprice}</strong>
                                    </dd>
                                </dl>
                                <hr/>
                                <p className='text-center'>
                                <img   src="../../images/payment/payments.webp"alt="..." height={26} />
                                </p>
                            </div>

                        </div>
                        
                    </div>
                    
                </div>
                
                
            </div>
            <div className='bg-light border-top p-4'>
                        <div className='container'>
                            <h6>Payment and refund policy</h6>
                            <p>At wow e-commerce, we strive to provide a seamless payment experience for our customers. Payments for our products and services are securely processed through trusted payment gateways. We accept various payment methods to accommodate your preferences. We also understand that circumstances may change, and therefore offer a transparent refund policy. If you are not fully satisfied with your purchase, we provide a hassle-free refund process within 3-4 days of the purchase date.<p> Please refer to our refund policy for more details on eligibility criteria and refund processing times.</p></p>
                        </div>
                    </div>
                    </div>
            ):(
                <div className='card text-center'>
                <div className='card-body'>
                    <h5 className='card-title'>Your cart is empty</h5>
                    <p className='card-text'>Looks like you haven't added any items to your cart yet.</p>
                    <Link to='/fashion' className='btn btn-primary'>Back to Shopping</Link>
                </div>
            </div>
            )}
        
        </div>
    );
}

export default Cart;
