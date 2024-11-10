import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Order = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div>
      <div className="border-t pt-4">
        <Title className="text-start" text1="MY" text2="ORDER" />
        {products.slice(1, 4).map((items, index) => (
          <div
            key={index}
            className="border-y border-gray-400 flex flex-col py-4 gap-6"
          >
            <div className="flex  justify-between items-center">
              <div className="flex  justify-between items-center text-sm">
                <div className="flex gap-3">
                  <img src={items.image[0]} className="w-16 sm:w-20" alt="" />
                </div>
                <div className="flex flex-col gap-3 text-sm">
                  <p className="font-medium text-sm"> {items.name}</p>
                  <div className="flex gap-3 ">
                    <p>{items.price}</p>
                    <p>Quantity : 1</p>
                    <p> size : M</p>
                  </div>
                  <p className="text-sm">
                    {new Date().toTimeString()}
                    {"   "}

                    {new Date().toDateString()}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 justify-center items-center ">
              <p className="border rounded-full bg-green-700 w-4 h-4"> </p>
              <p>Ready to Chip</p>
              </div>
              <div>
              
              <button type="button" className="border-gray-400 border hover:cursor-pointer p-3">Track order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
