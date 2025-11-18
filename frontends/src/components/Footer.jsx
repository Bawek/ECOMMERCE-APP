import React from 'react'
import { NavLink } from 'react-router-dom'
import baw from '../assets/frontend_assets/baw.jpg'

const Footer = () => {
  return (<div className='items-center '>
    <div className='flex flex-col p-3 sm:grid grid-cols-[3fr_1fr_1fr]'>
    <NavLink to={`/`} className='max-w-50 py-10'>
      
      <img src={baw} className="w-36 p-2"  alt="footer Logo" loading='lazy'/>  <p>This is a full-stack e-commerce application 
        I created to allow users to buy and sell products online. It features user authentication, 
        product management, shopping cart, and checkout functionality.
         The app is fully responsive and provides a clean, modern interface 
         for both buyers and sellers.</p>   </NavLink>

<div className='p-10 '>
<h1 className='text-2xl font-medium'>Company</h1>
<NavLink
          to="/"
          className="py-3 pl-4  gap-1"
         
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/collection"
          className="py-3 pl-4  gap-1"
          
        >
          <p>Collection</p>
        </NavLink>
        <NavLink
          to="/about"
          className="py-3 pl-4  gap-1"
        
        >
          <p>About</p>
        </NavLink>
        <NavLink
          to="/contact"
          className="py-3 pl-4  gap-1"
         
        >
          <p>Contact</p>
        </NavLink></div>
        <div className='flex flex-col gap-3 p-10 '>
        <h1 className='text-2xl font-medium'>Contact Information</h1>

       <p>Phone :0989131968</p> 
       <p>Email :bawekeasres@gmail.com</p>
        </div>
</div>

<div className='text-center text-sm font-medium mb-3 pb-2s'>
<p>Copyright 2024@baweke - All Right Reserved.</p>
</div>
</div>
  )
}

export default Footer