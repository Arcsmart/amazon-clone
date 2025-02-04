import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/Endpoint'
import ProductCard from '../../components/Product/ProductCard'
import classes from './Results.module.css'

const Results = () => {
  const [results,setResults]=useState([])
  const {categoryName}=useParams()
  useEffect(()=>{
    console.log(categoryName)
      const fetchProducts = async () => {
      try {
        const response = await axios.get(`${productUrl}/products/category/${categoryName}`);
        setResults(response.data);
        console.log(response.data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
    
    
  },[categoryName])
  return (
    <Layout>
      <h1 style={{ padding: "30px" }}>Results</h1>
      <p style={{ padding: "30px" }}>Category/{categoryName}</p>
      <hr />
      <div className={classes.product_container}>
        {results.length > 0 ? (
          results.map((Product) => (
            <ProductCard key={Product.id} product={Product} />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </Layout>
  );
}

export default Results