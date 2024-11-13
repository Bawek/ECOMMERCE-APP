import React, { useState } from 'react'

const Login = () => {
  const [curentState,setCurentState]=useState("Sign Up")
  return (
    <form onSubmit={(e)=>e.preventDefault()} className='flex flex-col gap-5 items-center w-[90%] sm:max-w-50'>
    <div className='font-medium text-2xl'>{curentState}</div>
{curentState==="Sign Up"?    <input type="text" className=" w-full max-w-[50vw] bg-green-200  py-3 border border-gray-600 rounded-sm " placeholder="Name" id="" />
  :""  }

    <input type="email" className=" w-full max-w-[50vw] bg-green-200  py-3 border border-gray-600 rounded-sm " placeholder="Email" id="" />
    <input type="password" className=" w-full max-w-[50vw] bg-green-200  py-3 border border-gray-600 rounded-sm " placeholder="Password" id="" />
   <div className='flex justify-between gap-20 text-sm mt-[-8px]'><p>forget password</p>
   <div>
   {curentState==="Sign Up" ? <p  className='text-end hover:cursor-pointer' onClick={()=>setCurentState("LOg In")}>Log In </p>:<p className='text-end hover:cursor-pointer'  onClick={()=>setCurentState("Sign Up")}>Create acount</p> }
   </div>
   </div>
   <button type="submit" className='py-2 px-4 rounded bg-black text-white'>{curentState==="Sign Up" ? "Sign Up ": "Log In"}</button>
    
    </form>
  )
}

export default Login