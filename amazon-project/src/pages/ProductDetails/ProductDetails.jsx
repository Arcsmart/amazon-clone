import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../components/Product/ProductCard';
import { productUrl } from '../../Api/Endpoint';
const ProductDetails = () => {
  const {productId}=useParams()
  const [product,setProduct]=useState()
  useEffect(()=>{
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      
      setProduct(res.data)
      console.log(res.data);
    }).catch((err)=>{
      console.log(err)
    })
      
    
  },[])
  return (
    <Layout>
      <div>
        <ProductCard 
        product={product}/>
      </div>
    </Layout>
  );
}

export default ProductDetails