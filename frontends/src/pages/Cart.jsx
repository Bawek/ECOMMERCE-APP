import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import TotalCart from "../components/TotalCart";

const Cart = () => {
  const { cart, products, currency, HandleCartFun ,navigate} = useContext(ShopContext);
  const [data, setData] = useState([]);
  let temd = [];
  useEffect(() => {
    for (const items in cart) {
      for (const item in cart[items]) {
        if (cart[items][item] > 0) {
          temd.push({
            _id: items,
            size: item,
            quantiy: cart[items][item],
          });
        }
      }
    }
    setData(temd);
  }, [cart]);
  return (
    <div>
      <div className="flex flex-col gap-4 w-full sm:items-start  ">
        <div className="pt-10 border-t w-1/2  ">
          <Title text1="YOUR" text2="CARTS" />
        </div>
        {data.map((item, index) => {
          const prdata = products.find((items) => items._id === item._id);

          return (
            <div
              className="w-full border flex flex-col gap-4 justify-start text-sm"
              key={index}
            >
              <div className="flex justify-between ">
                <div className="flex gap-7">
                  <div className=" ">
                    <img
                      src={prdata.image[0]}
                      className="w-16 sm:w-20 h-auto"
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col">
                    <div>{prdata.name}</div>
                    <div className="flex gap-5">
                      <p>
                        {currency}
                        {prdata.price}
                      </p>
                      <p className="border px-2">{item.size}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 pr-10  items-center">
                  <input
                    type="number"
                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : HandleCartFun(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                    }
                    className=" border w-10 h-10 "
                    min={1}
                    id=""
                    defaultValue={item.quantiy}
                  />
                  <img
                    src={assets.bin_icon}
                    onClick={() => HandleCartFun(item._id, item.size, 0)}
                    className="w-5 h-5 hover:cursor-pointer"
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" w-full flex flex-col items-end">
        <div className=" w-1/2">
          <TotalCart />
        </div>
        <div className="w-full flex justify-end overflow-hidden">
          <button type="button " onClick={()=>navigate("/place-order")} className="px-5 py-3 rounded bg-blue-800">
            Cheack Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
