import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Slider from "./components/Slider";
import AboutFood from "./components/AboutFood";
import Home from "./pages/Home";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import NewAccount from "./pages/NewAccount";

import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";

function App() {

  return (
    
    <BrowserRouter>
   {/* {window.location.pathname !== '/sign-in'  && <Header />} */}
 {window.location.pathname == '/sign-in' || window.location.pathname == '/new-account' ? "":<Header/> }
    <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/new-account" element={<NewAccount/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/orders" element={<Orders/>}/>
    </Routes>
    {window.location.pathname == '/sign-in' || window.location.pathname == '/new-account' ? "":<Footer/> }
    
    </BrowserRouter>
  );
}

export default App;
