import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import { Form } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({token}) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [size, setSize] = useState([]);
  const [bestseller, setBestseller] = useState(false);
  const [price, setPrice] = useState(25);


  const toggleSize = (selectedSize) => {
    setSize((prevSizes) => 
      prevSizes.includes(selectedSize)
        ? prevSizes.filter((size) => size !== selectedSize)
        : [...prevSizes, selectedSize]
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Move this to the top
  
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("sizes", JSON.stringify(size)); // Corrected JSON.stringify
      formData.append("price", price);
      formData.append("bestSeller", bestseller);
      
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);
      const response = await axios.post(`${backendUrl}/api/product/add`, formData,{headers:{token}});
    if (response.data.success) {

      toast.success(response.data.message)
      setImage1("")
      setImage2("")
      setImage3("")
      setImage4("")
      setName("")
      setDescription("")
      setPrice(0)

    }  
    else toast.error("Error in Recording Data")
      console.log("Server response:", response.data); // Log the response data for debugging if needed
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };
  
  

  return (
    <div className="p-3 flex flex-col justify-start items-start gap-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <p>Upload Image</p>
          <div className="flex gap-3">
          {/* Image upload section 1 */}
          <div className="relative">
          <label htmlFor="file">
            <img
              src={image1 ? URL.createObjectURL(image1) : assets.upload_area} // Show selected image or upload icon
              className="w-20 cursor-pointer"
              alt="upload area 1"
            />
            <input
              type="file"
              onChange={(e) => setImage1(e.target.files[0])}
              className="hidden"
              id="file"
            /></label>
          </div>

          {/* Image upload section 2 */}
          <div className="relative">
            <img
              src={image2 ? URL.createObjectURL(image2) : assets.upload_area}
              className="w-20 cursor-pointer"
              alt="upload area 2"
              onClick={() => document.getElementById("file-2").click()}
            />
            <input
              type="file"
              onChange={(e) => setImage2(e.target.files[0])}
              className="hidden"
              id="file-2"
            />
          </div>

          {/* Image upload section 3 */}
          <div className="relative">
            <img
              src={image3 ? URL.createObjectURL(image3) : assets.upload_area}
              className="w-20 cursor-pointer"
              alt="upload area 3"
              onClick={() => document.getElementById("file-3").click()}
            />
            <input
              type="file"
              onChange={(e) => setImage3(e.target.files[0])}
              className="hidden"
              id="file-3"
            />
          </div>

          {/* Image upload section 4 */}
          <div className="relative">
            <img
              src={image4 ? URL.createObjectURL(image4) : assets.upload_area}
              className="w-20 cursor-pointer"
              alt="upload area 4"
              onClick={() => document.getElementById("file-4").click()}
            />
            <input
              type="file"
              onChange={(e) => setImage4(e.target.files[0])}
              className="hidden"
              id="file-4"
            />
          </div>
        </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              className="border border-green-400 outline-none py-2 w-full max-w-[500px]"
              placeholder="Type here"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="description">Product Description</label>
            <textarea
              className="rounded border border-green-400 outline-none py-2 w-full max-w-[500px]"
              placeholder="Type here"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-3">
              <label htmlFor="category">Product Category</label>
              <select
                name="category"
                className="rounded border border-green-400 outline-none py-2 w-full max-w-[500px]"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="subCategory">Product Sub Category</label>
              <select
                className="rounded border border-green-400 outline-none py-2 w-full max-w-[500px]"
                id="subCategory"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              >
                <option value="Topwear">Topwear</option>
                <option value="Bottomwear">Bottomwear</option>
                <option value="Winterwear">Winterwear</option>
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="price">Product Price</label>
              <input
                type="text"
                className="rounded border border-green-400 outline-none py-2 w-full max-w-[500px]"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <p>Product Sizes</p>
            <div className="flex gap-3">
              {["S", "M", "L", "XL", "XXL"].map((s) => (
                <p
                  key={s}
                  className={`p-3 hover:cursor-pointer ${size.includes(s) ? "bg-green-300" : "bg-slate-300"}`}
                  tabIndex="0"
                  onClick={() => toggleSize(s)}
                >
                  {s}
                </p>
              ))}
            </div>
          </div>

          <div className="flex gap-3 justify-start items-center">
            <input
              type="checkbox"
              className="rounded border border-green-400 outline-none py-3"
              id="bestseller"
              checked={bestseller}
              onChange={(e) => setBestseller(e.target.checked)}
            />
            <label htmlFor="bestseller">Add to Bestseller</label>
          </div>

          <div className="flex gap-3 justify-start items-center">
            <input
              type="submit"
              className="rounded border border-green-400 outline-none p-3 max-w-[500px] hover:cursor-pointer"
              value="Add Item"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
