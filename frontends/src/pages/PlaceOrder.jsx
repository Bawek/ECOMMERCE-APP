import React, { useContext, useState } from "react";
import Title from "../components/Title";
import TotalCart from "../components/TotalCart";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [order, setOrder] = useState("");

  const {navigate}=useContext(ShopContext)
  return (
    <div>
      <div className="grid items-center justify-center border-green-800 border-2 bg-green-200 text-center">
        <Title className="" text1="DELIVERY" text2="INFORMATON" />
        <div className="flex ">
          <input
            type="text"
            className="rounded   overflow-hidden border border-gray-500 w-full px-16 py-3  bg-green-100  "
            placeholder="First Name"
            id=""
          />
          <input
            type="text"
            className="rounded   overflow-hidden border border-gray-500 w-full px-20 py-3   bg-green-100 "
            placeholder="Last Name"
            id=""
          />
        </div>
        <input
          type="email"
          className="rounded  overflow-hidden border border-gray-500 w-full text-start px-40 py-3  bg-green-100  "
          placeholder=" Email"
          id=""
        />
        <input
          type="number"
          className="rounded overflow-hidden border border-gray-500 w-full   px-40 py-3   bg-green-100  "
          placeholder="Phone Number"
          id=""
        />

        <div className="flex  ">
          <input
            type="text"
            className="rounded   overflow-hidden px-16 py-3  bg-green-100  "
            placeholder="city"
            id=""
          />
          <input
            type="text"
            className="rounded   overflow-hidden px-20 py-3  bg-green-100  "
            placeholder="State"
            id=""
          />
        </div>
        <div className="flex  ">
          <input
            type="text"
            className="rounded   overflow-hidden px-16 py-3 bg-green-100  "
            placeholder="Capital "
            id=""
          />
          <input
            type="text"
            className="rounded   overflow-hidden px-20 py-3   bg-green-100 "
            placeholder="First Name"
            id=""
          />
        </div>
      </div>

      <div>
        <TotalCart />
      </div>
      <div className="flex flex-col items-center gap-10">
        <Title text1="PAYMENT" text2="METHOD" />
        <div className="flex gap-3">
          <div className="flex items-center justify-center border-2 p-2 border-green-200 gap-2">
            <p
              className={`w-4 h-4 border-2  rounded-full ${
                order === "stripe" ? "bg-green-800" : ""
              }`}
            ></p>
            <img
              className="max-h-6 max-w-20 hover:cursor-pointer"
              onClick={() => setOrder("stripe")}
              src={assets.stripe_logo}
              alt=""
            />
          </div>
          <div className="flex items-center justify-center border-2 p-2 border-green-200 gap-2">
            <p
              className={`w-4 h-4 border-2  rounded-full ${
                order === "roz" ? "bg-green-800" : ""
              }`}
            ></p>
            <img
              onClick={() => setOrder("roz")}
              className="max-h-6 max-w-20 hover:cursor-pointer"
              src={assets.razorpay_logo}
              alt=""
            />
          </div>
          <div className="flex items-center justify-center border-2 p-2 border-green-200 gap-2">
            <p
              className={`w-4 h-4 border-2  rounded-full ${
                order === "cod" ? "bg-green-800" : ""
              }`}
            ></p>
            <p onClick={() => setOrder("cod")} className="hover:cursor-pointer">CASH ON DELIVERY </p>
          </div>
        </div>
           <div><button className="bg-black text-white p-3 rounded" onClick={()=>navigate("/order")}> PLACE ORDER </button></div>
      </div>
    </div>
  );
};

export default PlaceOrder;
