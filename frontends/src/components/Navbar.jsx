import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const {setShowSearch,GetCount}=useContext(ShopContext)

  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <NavLink to={`/`}>
        <img src={assets.logo} className="w-36" alt="..." />{" "}
      </NavLink>

      <ul className="hidden sm:flex text-sm items-center justify-center gap-4">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        <img
          src={assets.search_icon}
          onClick={()=>setShowSearch(true)}
          className="w-5 cursor-pointer"
          alt="..."
        />

        {/* Profile Icon with Dropdown */}
        <div className="relative group flex items-center gap-4">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="..."
          />

          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-36 py-2 px-4 bg-slate-100 text-gray-600 hidden pointer-events-none group-hover:opacity-100 group-hover:block transition duration-300 ease-in-out">
            <p className="cursor-pointer hover:text-black">My Profile</p>
            <p className="cursor-pointer hover:text-black">Orders</p>
            <p className="cursor-pointer hover:text-black">Logout</p>
          </div>
        </div>

        <NavLink to="/carts" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5 "
            alt="menu_Icon"
          />
          <p className="w-4 absolute right-[-5px] text-center bottom-[-5px] text-sm text-white bg-black rounded-full leading-4 text-[8px] aspect-square">
           {GetCount()}
          </p>
        </NavLink>

        <img
          src={assets.menu_icon}
          onClick={() => setVisible(true)}
          className="w-5  sm:hidden cursor-pointer"
          alt="Menu"
        />
      </div>

      <div
        className={`fixed top-0 right-0 bottom-0 flex flex-col bg-white transition-all duration-300 ${
          visible ? "w-full" : "w-0"
        }`} id="a"
      >
        <div
          className="flex items-center gap-4 p-3 cursor-pointer  "
          onClick={() => setVisible(false)}
        >
          <img src={assets.dropdown_icon} className="h-4 mt-1 rotate-180" />
          Back
        </div>
        <NavLink
          to="/"
          className="py-3 pl-4 border gap-1"
          onClick={() => setVisible(false)}
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/collection"
          className="py-3 pl-4 border gap-1"
          onClick={() => setVisible(false)}
        >
          <p>Collection</p>
        </NavLink>
        <NavLink
          to="/about"
          className="py-3 pl-4 border gap-1"
          onClick={() => setVisible(false)}
        >
          <p>About</p>
        </NavLink>
        <NavLink
          to="/contact"
          className="py-3 pl-4 border gap-1"
          onClick={() => setVisible(false)}
        >
          <p>Contact</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
