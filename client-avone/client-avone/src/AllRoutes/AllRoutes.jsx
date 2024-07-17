import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Productpage from '../pages/PDP/productPage';
import Home from '../pages/Home/Home';
import Cartpage from '../pages/CartPage/Cartpage';
import Checkout from '../pages/Checkout/Checkout';
import Payments from '../pages/Payment/Payments';
import Payment from '../components/payment';
import Login from '../pages/Signup/Login';
import Signup from '../pages/Signup/Signup';
import Wishlist from '../pages/Wishlist/Wishlist';
import Productlistingpage from '../pages/PLP/productListingpage';
import Bestseller from '../pages/bestSeller/Bestseller';
import About from '../pages/footer/About';
import Contact from '../pages/footer/Contact';
import FAQ from '../pages/footer/FAQ';
import Information from '../pages/footer/InformationPage';
import Privacy from '../pages/footer/Privacy';
import Return from '../pages/footer/ReturnPolicy';


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/product/:productId" element={<Productpage />} />
        <Route path="/" element={<Home />} />
        <Route path="/Cartpage" element={<Cartpage />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path='/plp/:id' element={<Productlistingpage />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Faq" element={<FAQ/>}/>
        <Route path="/inform" element={<Information/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/return" element={<Return/>}/>
        <Route path='/bestseller' element={<Bestseller/>}/>




        
      </Routes>
    </div>
  )
}

export default AllRoutes