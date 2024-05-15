import React, { useState,useEffect } from 'react';
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
import { useCont } from '../../Context/Context';
import SuccessAlert from '../../Components/Alerts/SuccessAlert';
import { useSelector } from 'react-redux';

export const Productlist = () => {
  const { selectedSize } = useSelector(state => state.SizeFilter);
  console.log("sizes are yyyyyeyyey",selectedSize)
  console.log(selectedSize)
  // const selectedPrice2=useSelector(state=>state.PriceFilter)
const {selectedPrice}=useSelector(state=>state.PriceFilter)
console.log(selectedPrice)
 const SelectedSizes=useSelector(state=>state.SizeFilter)
  // const selectedPrice=useSelector(state=>state.PriceFilter)
  // console.log("prices are",selectedPrice)
  // const selectedPriceArray=Object.keys(selectedPrice)
  // const selectedSizeArray=Object.keys(SelectedSizes)
  const selectedColor = useSelector(state => state.ColorFilter);
  const {SelectedColor}=useSelector(state=>state.ColorFilter)
  console.log("color areeee ----------------======",SelectedColor)
  console.log("from redux ",selectedColor)
const selectedColorData =selectedColor
console.log(selectedColorData)
// const selectedColorArray=Object.keys(selectedColorData)
// console.log("colors areeeeeeeeeeeeeeeeeee",selectedColorArray)

  // console.log("colors arrays are",selectedColorArray)
  // console.log("prices are",selectedPriceArray)
  // console.log("array is",selectedSizeArray)
  console.log("Sizes are",SelectedSizes)
  console.log("colors are-----------",selectedColor)
  const[FilterApplied,setFilterApplied]=useState(false)
  const [View, setView] = useState('grid');
  const [products, setProducts] = useState([]);
  // const[Products2,setProducts2]=useState([])
  // useEffect(()=>{
  //   let RepeatedProducts=[]
  //   for(let i=0;i<9;i++)
  //     {
  //       RepeatedProducts=RepeatedProducts.concat(productsData)
        
  //     }
  //     console.log("36 products:",RepeatedProducts)
  //     setProducts(RepeatedProducts)
      // setProducts2(RepeatedProducts)
  // })
  const{Popup}=useCont()
  // function GetProducts() {
  //   let repeatedProducts = [];
  //   for (let i = 0; i < 9; i++) {
  //     repeatedProducts = repeatedProducts.concat(productsData);
  //   }
    
  // }


useEffect(()=>{
  if(FilterApplied){
     const FilteredData=productsData.filter(product=>{
      const ColorMatch=SelectedColor.includes(product.color)
      const SizeMatch=selectedSize.includes(product.Size)
      const PriceMatch=selectedPrice.some(price=>product.price>=price)
      return ColorMatch||SizeMatch||PriceMatch
     })

    console.log("new data is",FilteredData)
    setProducts(FilteredData)
  }
  else
  {
    let RepeatedProducts=[]
    for (let i=0;i<9;i++)
      {
        RepeatedProducts=RepeatedProducts.concat(productsData)
      
      }
      setProducts(RepeatedProducts)
  }
 


  
},[SelectedColor,FilterApplied,selectedSize,selectedPrice])

  const ChangeView = (Newview) => {
    setView(Newview);
  };
  // useEffect(() => {
  //   if (FilterApplied) {
  //     const updatedData = productsData.filter(product => selectedSizeArray.includes(product.Size));
  //     setProducts(updatedData);
  //     console.log('updaated datas are',updatedDataS)
  //   } else {
  //     // Reset products to original data when filter is not applied
  //     setProducts(productsData);
  //   }
  // }, [FilterApplied, selectedSizeArray]);
  // const NewData=productsData.filter(product=>selectedPriceArray)
  const updatedData=productsData.map((product=>{
    const sizes=product.Size
    
    console.log("sizes are",sizes)
    console.log(typeof(sizes))
  }))
  console.log(typeof(SelectedSizes))
   console.log("updated data is",products)
  console.log("Filter Applied or not",FilterApplied)
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
            <FilterPrice FilterApplied={FilterApplied} setFilterApplied={setFilterApplied}/>
            <SIzeFilter FilterApplied={FilterApplied} setFilterApplied={setFilterApplied}/>
            <Review />
            <Colors FilterApplied={FilterApplied} setFilterApplied={setFilterApplied} />
            <FilterBy />
            <Tags />
            <Service />
          </div>

          <div className="col-md-9">
            {
              Popup && 
              <SuccessAlert/>
            }
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