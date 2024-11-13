import React, { useState } from 'react';
import axios from 'axios';

import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${backendUrl}/api/user/admin`, {
        email,
        password: pass,
      });

    // Assuming the backend response contains a token field
if (response.data.token) {
  setToken(response.data.token);
} else {
  toast.error(response.data.message);
}

    } catch (error) {
      console.error("Error:", error.message);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="bg-slate-300 p-10 flex flex-col gap-5 shadow-md">
        <h1 className="font-bold text-lg">Admin Login</h1>
        <form onSubmit={HandleSubmit} className="p-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-2 rounded border border-grey-500 outline-none mb-3"
            placeholder="Please Enter Email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            className="w-full py-2 rounded border border-grey-500 outline-none mb-3"
            placeholder="Please Enter Password"
            id="password"
          />
          <input
            type="submit"
            className="w-full py-2 rounded border border-grey-500 outline-none mb-3 bg-black text-white hover:cursor-pointer"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
