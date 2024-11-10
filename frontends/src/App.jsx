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
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex-col justify-center  bg-green-100">
   <ToastContainer/>
    <Navbar/>

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/collection" element={<Collection/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/products/:productId" element={<Product />} />    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/place-order" element={<PlaceOrder/> }/>
    <Route path="/order" element={<Order/>}/>
    <Route  path="/carts" element={<Cart/>}/>




    </Routes>
    <Footer/>
    </div>
  )
}

export default App 