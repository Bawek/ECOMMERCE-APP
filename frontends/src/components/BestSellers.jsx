import React, { useContext, useEffect, useState } from 'react'
import ProductItem from './ProductItem';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

const BestSellers = () => {
    const products = useContext(ShopContext); // Get products from context
    const product=products.products;
    console.log((products));
    const [latestProduct, setLatestProduct] = useState([]);
    
  
  
    useEffect(() => {
      if (product && product.length > 0) { // Check if products have been loaded
        const pro=product.filter (item=>
        item.bestseller===true)
        
        setLatestProduct(pro.slice(0, 5)); // Set only the first 10 items
      }
    }, [product]); // Run this effect when products change
  
    return (
      <div>
        <Title text1="Best" text2="Sellers"/>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 border'>
        {latestProduct.map((item,index) => (
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
    );
}

export default BestSellers