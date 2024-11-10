import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const TotalCart = () => {
  const { currency, delivery_fee, GetTotalCart } = useContext(ShopContext);
  return (
    <div className="w-full flex flex-col gap-10 items-end bg-green-500">
      <div className="w-full py-5 bg-green-500">
        <Title text1="CART" text2="TOTALS" />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex justify-between p-3 gap-11 w-full">
          <p>Subtotal</p>
          <p>
            {currency} {GetTotalCart()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between p-3">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between p-3 font-bold">
          <p>Total</p>
          <p>
            {currency}{" "}
            {GetTotalCart() === 0 ? 0 : GetTotalCart() + delivery_fee}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalCart;
