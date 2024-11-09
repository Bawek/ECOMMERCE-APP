import React, { useState } from 'react'

const Collection = () => {
  const [show,setShow]=useState(true)
  return (
    <div className='flex flex-col sm:flex-row gap-4 '>
    <div className='min-w-60' >

    <div className='cursor-pointer' onClick={()=>setShow(!show)}>
    <p className='text-2xl font-medium'> FILTERS</p>
    </div>

    <div className={`flex p-6 flex-col border ${show} ? "" : hidden`}>
    <p className='font-medium text-xl '>CATEGORIES</p>
    <div className='flex gap-2'>
    <input type="checkbox" name="" id="" value="Men"/>Men</div>
    <div className='flex gap-2'>
    <input type="checkbox" name="" id="" value="Women"/>Women</div>  <div className='flex gap-2'>
    <input type="checkbox" name="" id="" value="Kids"/>Kids</div>
    </div>
    
    </div>
    <div>
    Collection Page
    </div>
    
    </div>
  )
}

export default Collection