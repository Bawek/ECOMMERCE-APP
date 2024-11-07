// import React from 'react'

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import PlaceOrder from "./pages/PlaceOrder"
import Order from "./pages/Order"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/collection" element={<Collection/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/product/:productId" element={<Product/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/place-order" element={<PlaceOrder/> }/>
    <Route path="/order" element={<Order/>}/>




    </Routes>
    <Footer/>
    </div>
  )
}

export default App 