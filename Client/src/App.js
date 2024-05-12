import logo from './logo.svg';
import './App.css';
import Demo from './Demo'
import Header from './Components/Main/Header';
import Topmenu from './Components/Main/Topmenu';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Views/Home';
import Footer from './Components/Footer';
import Signin from './Components/Account/Signin';
import Signup from './Components/Account/Signup';
import Productlist from './Views/Products/Productlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Store from './Store/Store';
import { Provider } from 'react-redux';
import Cart from './Components/Cart/Cart';
import { ContextProvider } from './Context/Context';
import Checkout from './Components/Cart/Checkout';
function App() {
  
  return (
<>
<ContextProvider>
<Provider store={Store}>
<Header/>
<Topmenu/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/account/signin' element={<Signin/>}></Route>
  <Route path='/account/signup' element={<Signup/>}></Route>
  <Route path='/fashion' element={<Productlist/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path="/Checkout" element={<Checkout />} />

  
</Routes>
<Footer/>
</Provider>
</ContextProvider>

</>
 
  


  );
}

export default App;
