import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Signup from './pages/Auth/Signup';
import Payment from './pages/Payment/Payment';
import Orders from './pages/Orders/Orders';
import Cart from './pages/Cart/Cart';
import Results from './pages/Results/Results';
import ProductDetails from './pages/ProductDetails/ProductDetails';
const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Signup />} />
        <Route path="payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results/>}/>
        <Route path="/products/:productId" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default Routing