import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Add item to cart
  const AddToCart = (itemId, size) => {
    let cartItem = structuredClone(cart); // Clone the cart to avoid mutation
    if (!size) {
      
      toast.error("Please Select Size");
      return;
    }
    // Initialize cartItem[itemId] if it doesn't exist
   
    // Update the quantity of the selected size
    if (cartItem[itemId]) {
   
    if (cartItem[itemId][size]) {
      cartItem[itemId][size] += 1;
    } else {
      cartItem[itemId][size] = 1;

    }
  }
  else{
    cartItem[itemId] = {};
    cartItem[itemId][size] = 1;

  }
    setCart(cartItem); // Update the cart state
  };
 

  const GetCount=()=>{
    let totalCount=0;

  

    for(const items in cart){
      for(const item in cart[items]){
        try {
          
        if (cart[items][item]>0) {
       totalCount +=   cart[items][item];

        }
          
        } catch (error) {
          console.log(error);
        }

      }
    
  }
  console.log(totalCount);
  return totalCount
  }
   


  // Log the cart whenever it changes


  const currency = "$";
  const delivery_fee = 10;

  const value = {
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
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
