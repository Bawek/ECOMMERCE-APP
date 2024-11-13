import React from 'react'
import { assets } from '../assets/admin_assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between py-4 px-[4%]'>
    <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
    <button onClick={()=>setToken("")} className='rounded bg-black text-white px-4 py-2 text-lg'>Logout</button>
    </div>
  )
}

export default Navbar