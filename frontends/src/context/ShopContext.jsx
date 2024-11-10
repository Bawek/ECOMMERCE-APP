import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate=useNavigate()

  // Add item to cart
  const AddToCart = (itemId, size) => {
    let cartItem = structuredClone(cart); // Clone the cart to avoid mutation
    if (!size) {
      toast.error("Please Select Size");
      return;
    }
    if (cartItem[itemId]) {
      if (cartItem[itemId][size]) {
        cartItem[itemId][size] += 1;
      } else {
        cartItem[itemId][size] = 1;
      }
    } else {
      cartItem[itemId] = {};
      cartItem[itemId][size] = 1;
    }
    setCart(cartItem); // Update the cart state
  };

  const GetCount = () => {
    let totalCount = 0;

    for (const items in cart) {
      for (const item in cart[items]) {
        try {
          if (cart[items][item] > 0) {
            totalCount += cart[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };


  const HandleCartFun = (itemId, size, quantity) => {
    let cartData = structuredClone(cart);
    cartData[itemId][size] = quantity;
    console.log(cartData);
    setCart(cartData);
  };

const GetTotalCart= ()=>{
 let total=0;
for (const items in cart) {
 const productInfo=products.find(pro=>pro._id===items)
    for (const item in cart[items]) {
if (cart[items][item]>0) {
  total+=productInfo.price*cart[items][item];

}
else total=0
        
      }
    }
    return total
  }




  // Log the cart whenever it changes

  const currency = "$";
  const delivery_fee = 10;

  const value = {
    navigate,
    HandleCartFun,
    GetCount,
    AddToCart,
    cart,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    products,
    currency,
    delivery_fee,
    GetTotalCart
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
