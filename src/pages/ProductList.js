import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ACCESS_TOKEN } from '../constants/strapi';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
      async function fetchData() {
        try {
            let result = axios.get("http://localhost:1337/api/products", {
                    headers: {
                        'Authorization': `Bearer ${ACCESS_TOKEN}`
                    }
                    })
                    setProducts(result.data)
        } catch (error) {
            console.log(error.message);
    } 
    //   const result = await axios.get('http://localhost:1337/api/products');
    //   setProducts(result.data);
    }
    fetchData();
    console.log(products)
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(
        products.filter(product => product.category === selectedCategory)
      );
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  return (
    <div>
      <h2>Product List</h2>
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
      >
        <option value={null}>All categories</option>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
      </select>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
