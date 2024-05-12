import React from 'react';
import Carousel from '../Carousel/Carousel';
import CardIcons from '../Products/CardIcons';
import CardLogin from '../Cards/CardLogin';
import CardImage from '../Cards/CardImage';
import CardDealsOfTheDay from '../Cards/CardDealsOfTheDay';
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <>
      <Carousel />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <div className='row g-3' >
              <CardIcons />
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="row g-3">
              <div className="col-md-12 mb-4">
              <CardLogin />
        <div style={{marginTop:'15px'}}>
        <CardImage src="../../images/banner/Watches.webp" to="promo"  />
        </div>

              </div>
           
            </div>
            
          </div>
        <div className='container-fluid bg-light mb-3'>
          <div className='row'>
            <div className='col-md-12'>
              <CardDealsOfTheDay endDate={Date.now()+1000*60*60*14} title='Deals of the day' to='/'>

              <CardIcons/>
              </CardDealsOfTheDay>
            </div>

          </div>

        </div>
      
          
        </div>
 
        
      </div>
      <div className='bg-info bg-gradient p-3 text-center mb-3'>

<h4 className='m-0'>Explore Our Fashion Collection</h4>

</div>
<div className='container'>
  <div className='row'>
    <div className='col-md-3'>
      <Link to='/' className='text-decoration-none'>
        <img src="../../images/category/male.webp"
                  className="img-fluid rounded-circle"
                  alt="...">
        </img>
        <div className='text-center h6'> Men's Clothing</div>
      </Link>

    </div>
    <div className='col-md-3'>

<Link className='text-decoration-none' to='/'>
<img
                  src="../../images/category/female.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className='text-center h6'>
                  Women's Clothing
                </div>

</Link>
    </div>
    <div className='col-md-3'>
      <Link to='' className='text-decoration-none'>
        <img src="../../images/category/smartwatch.webp"
                  className="img-fluid rounded-circle"
                  alt="...">
        </img>
        <div className='text-center'>
          Smartwatches
        </div>
      </Link>

    </div>
    <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/footwear.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Footwear</div>
              </Link>
            </div>
  </div>

</div>
      
    </>
  );
};

export default Home;
