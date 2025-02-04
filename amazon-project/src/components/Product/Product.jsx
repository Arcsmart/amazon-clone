import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
const Product = () => {
      const [products,setproducts] =useState([]);
         useEffect(()=>{
          axios.get("https://fakestoreapi.com/products")
          .then((res)=>{
            console.log(res) 
            setproducts(res.data)     
          }).catch((error)=>{
              console.log(error)      
          })
         },[])
  return (
    <section className={classes.product_container}>
      {products.length > 0 ? (
        products.map((singleproduct) => (
          <ProductCard product={singleproduct} key={singleproduct.id} />
        ))
      ) : (
        <p>Loading products...</p> // Placeholder while loading
      )}
    </section>
  );
}

export default Product

//  {
//    products.map((singleproduct) => {
//      return <ProductCard Product={singleproduct} key={singleproduct.id} />;
//    });
//  }




  // return (
  //   <section className={classes.product_container}>
  //     {products.length > 0 ? (
  //       products.map((singleproduct) => (
  //         <ProductCard Product={singleproduct} key={singleproduct.id} />
  //       )))


  //      : (
  //       <p>Loading products...</p> // Placeholder while loading
  //      )
  //     }
  //   </section>
  // );
   