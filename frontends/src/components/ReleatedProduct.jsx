import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const ReleatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on category and subCategory
    if (products.length > 0) {
      let filtered = products.filter(item => item.category === category && item.subCategory === subCategory);
      setFilteredProducts(filtered.slice(0, 5));  // Get first 5 products
    }
  }, [category, subCategory, products]); // Ensure effect runs when category, subCategory, or products change

  return (
    <div>
      <Title text1="Related" text2="Products" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 border">
        {filteredProducts.map((item, index) => (
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

export default ReleatedProduct;
