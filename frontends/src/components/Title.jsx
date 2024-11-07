import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='flex justify-center items-center '>
    <p className='items-center text-3xl text-gray-600'>
    {text1} <span className='text-gray-70000'>{text2}</span></p>
    <p></p>
    </div>
  )
}

export default Title