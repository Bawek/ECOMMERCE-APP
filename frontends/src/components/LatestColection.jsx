import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const products = useContext(ShopContext); // Get products from context
  const product=products.products;
  const [latestProduct, setLatestProduct] = useState([]);
  


  useEffect(() => {
    if (product && product.length > 0) { // Check if products have been loaded
      setLatestProduct(product.slice(0, 10)); // Set only the first 10 items
    }
  }, [product]); // Run this effect when products change

  return (
    <div>
      <Title text1="Latest" text2="Collection"/>
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
};

export default LatestCollection;
