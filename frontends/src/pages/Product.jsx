import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import ReleatedProduct from "../components/ReleatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products,AddToCart } = useContext(ShopContext);
  const [prodactData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    FetchProductData();
  },[ productId,prodactData]);
  const FetchProductData = () => {  
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null; //to stop execution
      }
    });
  };
  return prodactData ? (
    <div className="border-t-2 pt-5 transition-all opacity-100">
      <div className="flex flex-col sm:flex-row  p-2">
        <div className="flex flex-col-reverse sm:flex-row gap-4 p-2">
          <div className="flex sm:flex-col p-2 w-20 cursor-pointer transition-all hover:opacity-500 ">
            {prodactData.image.map((item, index) => (
              <img src={item} onClick={() => setImage(item)} key={index} />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            {" "}
            <img className="w-full min-w-96 h-auto" src={image} alt="" />
          </div>
        </div>
        <div className=" flex flex-col ">
          <p className="font-medium text-xl py-3">{prodactData.name}</p>
          <div className="flex">
            <img src={assets.star_icon} className="w-3 m-1" alt="" />
            <img src={assets.star_icon} className="w-3 m-1" alt="" />
            <img src={assets.star_icon} className="w-3 m-1" alt="" />
            <img src={assets.star_icon} className="w-3 m-1" alt="" />
            <img src={assets.star_dull_icon} className="w-3 m-1" alt="" />
            (122)
          </div>
          <div>{prodactData.description}</div>

          <div className="flex flex-col p-4 my-4 gap-5">
            <p className=" font-medium text-xl">Select Size</p>

            <div className="flex gap-1">
              {prodactData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`px-3 py-2 bg-gray-300   ${
                    item === size ? "border-orange-600 border-2" : " "
                  }`}
                  key={index}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>

            <div>

            <button
            type="button"
            onClick={()=> AddToCart(prodactData._id, size)}
            className="py-2 px-5 bg-black text-white active:bg-gray-500"
          >
            Add to Cart
          </button>
          
            </div>
          </div>
          <hr className="my-3 " />
          <div className="flex flex-col text-sm">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
       
      </div>
      <div>
       

 
       <div className="flex ">
       <p className="p-3  border">Description</p>
       <p className="p-3 border ">Reviews (122)</p>
       </div>


       <div className="flex gap-6 text-sm border flex-col">
       <p>
       An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet.
        It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
       </p>
       <p>
       E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). 
       
       Each product usually has its own dedicated page with relevant information.
       
       </p>
       </div>
       </div>
<ReleatedProduct category={prodactData.category} subCategory={prodactData.subCategory} />
    </div>
  ) : null;
};
export default Product;
