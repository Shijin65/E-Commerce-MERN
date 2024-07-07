import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const ProductPage = () => {
  const [products ,setProducts]=useState([])

  useEffect(() => {
    handleproduct()
  }, [])

  const handleproduct =async()=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product`,
      {
        method: "GET",
      }
    )
    const userres = await response.json();
    if (!userres.error) {
      console.log(userres.AllProducts);
        setProducts(userres.AllProducts)
    }else{
      alert("not able to fetchproducted")
    }
  }
  return (
    <div>
        <span className="font-bold text-3xl  text-start w-full ">Products</span>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-6 ">
        {products.map((product,index) => (
               <ProductCard key={index}  product={product}/>
            ))}
        </div>

    </div>
  )
}

export default ProductPage