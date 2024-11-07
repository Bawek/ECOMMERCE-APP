import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col  sm:flex-row justify-around sm:text-sm md:first-letter:text-base items-center py-32 px-3 gap-20 text-center '>
    <div > 
    <img src={assets.exchange_icon}  alt="" className='m-auto w-12 mb-4'  />
    <p className='font-semibold'>Easy exchange policy</p>
    <p>  We offer free exchange policy</p>
    </div>

    <div > 
    <img src={assets.quality_icon} alt="" className='m-auto w-12 mb-4'  />
    <p className='font-semibold'>7 days return poly</p>
    <p>  We offer free exchange policy</p>
    </div>

    <div > 
    <img src={assets.support_img} alt="" className='m-auto w-12 mb-4'  />
    <p className='font-semibold'>Easy exchange policy</p>
    <p>  We offer free exchange policy</p>
    </div>
    </div>
  )
}

export default OurPolicy