import React, { useEffect, useState } from "react";
import Navbar from "./componentes/Navbar";
import Sidebar from "./componentes/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Orders from "./pages/Orders";
import List from "./pages/List";
import Login from "./componentes/Login";
export const backendUrl=import.meta.env.VITE_BACKEND_URL;
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
const App = () => {

  const [token,setToken]=useState(localStorage.getItem("token") ? localStorage.getItem("token") :"")
  useEffect(()=>{
localStorage.setItem("token",token)
  },[token])

  return (<div>
    <ToastContainer/>
    {token==="" ? <Login setToken={setToken}/> : (
      <div className="min-h-screen bg-grey">
      <Navbar setToken={setToken} />
      <hr />

      <div className="flex">
        <Sidebar className="w-1/5" />

        <div className="flex-1 p-4">
          <Routes>
            <Route path="/add" element={<Add token={token} />} />
            <Route path="/orders" element={<Orders  token={token}/>} />
            <Route path="/list"  element={<List token={token} />} />
          </Routes>
        </div>
      </div>
  </div>)}
  </div>
   
  );
};

export default App;
