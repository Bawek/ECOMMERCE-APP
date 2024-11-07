import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='text-center'>
    <div className='text-2xl font-medium '> Subscribe now & get 30% Discount</div>
    <div>
    <form action="" className='w-full flex items-center justify-center gab-1 py-5' method="post" onSubmit={(e)=>e.preventDefault}>
    <input type="email" name="" placeholder='Enter Email' className='bg-gray-200 rounded-sm px-4 py-2 outline-none border' id="" />
    <input type="button" value="Submit" className='bg-green-600 rounded-sm px-4 py-2' />
    </form>
    </div>
    </div>
  )
}

export default NewsletterBox