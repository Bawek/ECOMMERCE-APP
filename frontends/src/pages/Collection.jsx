import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from "../context/ShopContext";
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import SearchBox from '../components/SearchBox';
const Collection = () => {
  const {products,search,setSearch,showSearch}=useContext(ShopContext)
  const [show,setShow]=useState(true)
  const [filterProduct,setFilterProduct]=useState([])
  const [category,setCategory]=useState([])
  const [subcategory,setSubCategory]=useState([])
  const [sort,setSort]=useState("Relivant")
  const Sortf=()=>{
    let product=filterProduct
    switch(sort){
      case "High-to-low" : product.sort((a,b)=>(a.price-b.price))
      break
      case "Low-to-high" : product.sort((a,b)=>(b.price-a.price))
      break
      default :
      ShowFilter()
    }

  }
  const togleCatagory=(e)=>{
    if(category.includes(e.target.value)){
     
      setCategory(category.filter(item=>item!==e.target.value))

      
    }
    else{
   
      setCategory(prev=>[...prev,e.target.value])
    
    }

  }
  const togleSubCatagory=(e)=>{
    if(subcategory.includes(e.target.value)){
      setSubCategory(subcategory.filter(item=>item!==e.target.value))
    }
    else
      setSubCategory(prev=>[...prev,e.target.value])
    
  }

useEffect(()=>{
  Sortf()
},[sort])
 


  useEffect(()=>{
    ShowFilter()
  },[category,subcategory,search,showSearch])
  let product=products


const ShowFilter=()=>{
  if ( showSearch&&search ) {
  product=  product.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
   }


if (category.length>0 ) {
product=  product.filter(item=>category.includes(item.category))
  console.log(product);
}
if (subcategory.length>0) {
  product= product.filter(item=>subcategory.includes(item.subCategory))
  
}
setFilterProduct(product)


}


  return (
    <div>
    <div className='w-full'>
    <SearchBox/>
    </div>
    <div className='flex flex-col sm:flex-row gap-4  '>
    <div className='min-w-60' >
   

    <div className='cursor-pointer my-3 flex gap-3' onClick={()=>setShow(!show)}>
    <p className='text-2xl font-medium'> FILTERS</p>
    <img className={`mt-2 text-sm h-3 sm:hidden ${show ? " " : "rotate-90"}`} src={assets.dropdown_icon} alt="" />
    </div>
 
    <div className={`flex p-6 flex-col border border-gray-300 ${show ? "" : "hidden"}`}>
    <p className='font-medium text-xl '>CATEGORIES</p>
    <div className='flex gap-2'>
    <input type="checkbox" onChange={togleCatagory} name="" id="" value="Men"/>Men</div>
    <div className='flex gap-2'>
    <input type="checkbox" onChange={togleCatagory} name="" id="" value="Women"/>Women</div>  <div className='flex gap-2'>
    <input type="checkbox" onChange={togleCatagory} name="" id="" value="Kids"/>Kids</div>
    </div>

    <div className={`flex p-6 flex-col border mt-5 border-gray-300 ${show ? "" : "hidden"}`}>
    <p className='font-medium text-xl '>TYPE</p>
    <div className='flex gap-2'>
    <input type="checkbox" onChange={togleSubCatagory} name="" id="" value="Topwear"/>Topwear</div>
    <div className='flex gap-2'>
    <input type="checkbox" onChange={togleSubCatagory} name="" id="" value="Bottomwear"/>Bottomwear</div>  <div className='flex gap-2'>
    <input type="checkbox" onChange={togleSubCatagory} name="" id="" value="Winterwear"/>Winterwear</div>
    </div>
    
    </div>
    <div> 
    <div className='flex justify-between'>
     <Title text1="All" text2="Collection"/>

     <select name="" id="" onChange={(e)=>setSort(e.target.value)} className='border-2 rounded shadow border-gray-900 border-medium'  >
     <option value="Relivant">Sort By : Relivant</option>
     <option value="Low-to-high">Sort By : Low-to-high</option>
     <option value="High-to-low">Sort By : High-to-low</option>
     </select>
     </div>
      <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-2 border'>
      {filterProduct.map((item,index) => (
        <ProductItem 
          key={index}
          id={item._id} 
          image={item.image} 
          name={item.name} 
          price={item.price} 
        />
      ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default Collection