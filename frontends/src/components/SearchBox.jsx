import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";

const SearchBox = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

 
  return showSearch? (
    <div className="flex items-center justify-center w-39 text-2xl bg-gray-100 sm:ml-42">
      <div className="flex border rounded-full border-gray-500 justify-center m-4  items-center px-5  py-2">
        <input
          type="text"
          id="a"
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none bg-gray-100 "
          value={search}
          placeholder="Search"
        />
        <img src={assets.search_icon} className="img-fluid" alt="..." />
      </div>
      <img
        src={assets.cross_icon}
        onClick={() => setShowSearch(false)}
        className="img-fluid"
        alt="..."
      />
    </div>
  ) : null;
};

export default SearchBox;
