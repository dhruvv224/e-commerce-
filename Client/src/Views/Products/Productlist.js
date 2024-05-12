import React, { useState } from 'react';
import Breadcrumbs from './Breadcrumbs';
import FilterCategory from './Filters/FilterCategory';
import FilterPrice from './Filters/FilterPrice';
import SIzeFilter from './Filters/SIzeFilter';
import Colors from './Filters/Colors';
import Review from './Filters/Review';
import FilterBy from './Filters/FilterBy';
import Tags from './Filters/Tags';
import Service from './Filters/Service';
import CardProductsGrid from '../../Components/Cards/CardProductsGrid';
import productsData from '../../Components/Data/Products';
import CardProductsList from '../../Components/Cards/CardProductsList';

export const Productlist = () => {
  const [View, setView] = useState('grid');
  const [products, setProducts] = useState(GetProducts());

  function GetProducts() {
    let repeatedProducts = [];
    for (let i = 0; i < 9; i++) {
      repeatedProducts = repeatedProducts.concat(productsData);
    }
    return repeatedProducts;
  }

  const ChangeView = (Newview) => {
    setView(Newview);
  };

  return (
    <div>
      <div
        className="p-5 bg-primary bs-cover"
        style={{
          backgroundImage: "url(../../images/banner/50-Banner.webp)",
          backgroundRepeat: "no-repeat", // Add this line to prevent repeating
          backgroundSize: "cover", // Optional: maintain cover aspect ratio
        }}
      >
        <div className="container text-center">
          <span className="display-5 px-3 bg-white rounded shadow">
            T-Shirts
          </span>
        </div>
      </div>
      <Breadcrumbs />
      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-md-3">
            <FilterCategory />
            <FilterPrice />
            <SIzeFilter />
            <Review />
            <Colors />
            <FilterBy />
            <Tags />
            <Service />
          </div>

          <div className="col-md-9">
            <div className="row">
              <div className="col-7">
                <span className="align-middle fw-bold">
                {products.length} Results for
                  <span className="text-warning">"T-shirt"</span>
                </span>
              </div>
              <div className="col-5 d-flex justify-content-end">
                <select
                  className="form-select mw-180 float-start"
                  aria-label="Default select"
                >
                  <option value={1}>Most Popular</option>
                  <option value={2}>Latest items</option>
                  <option value={3}>Trending</option>
                  <option value={4}>Price low to high</option>
                  <option value={4}>Price high to low</option>
                </select>
                <div className="btn-group ms-3" role="group">
                  <button
                    aria-label="grid"
                    type="button"
                    onClick={() => ChangeView("grid")}
                    className={`btn ${
                      View === "grid" ? "btn-primary" : "btn-outline-primary"
                    }`}
                  >
                    <i className="bi bi-grid"></i>
                  </button>
                  <button
                    aria-label="list"
                    type="button"
                    onClick={() => ChangeView("list")}
                    className={`btn ${
                      View === "list" ? "btn-primary" : "btn-outline-primary"
                    }`}
                  >
                    <i className="bi bi-list"></i>
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row g-3">
              {View === "grid" &&
                products.map((product, index) => (
                  <div key={index} className="col-md-4">
                    <CardProductsGrid data={product} />
                  </div>
                ))}
                {
                 View==="list" &&
                 products.map((product,index)=>(
                  <div key={index} className='col-md-12'>
                    <CardProductsList data={product}/>
                  </div>
                 ))
                }
            </div>
            <hr/>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productlist;
