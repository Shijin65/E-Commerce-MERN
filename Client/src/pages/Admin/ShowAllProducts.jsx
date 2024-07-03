import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/Authcontext'
import AdminProductCard from '../../components/AdminProductCard';
import { useNavigate } from 'react-router-dom';
const VITE_API_URL = import.meta.env.VITE_API_URL;

const ShowAllProducts = () => {
  const [products,setProducts]=useState([])
  const {user}=useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
  
      getProductsData()
    
  }, [])
  
  function rerender(){
    getProductsData()
  }
  const getProductsData = async () => {
  
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/product`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth")}`
      },
    });
    const userres = await response.json();
    if (!userres.error) {
      console.log(userres.AllProducts)
      setProducts(userres.AllProducts)
    }else{
      console.log("some thing happend while fetching")
      navigate("/login",{replace:true})
    }

  }
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 p-2'>{products.map((product,index)=><AdminProductCard key={index} rerender={rerender} product={product} />)}</div>
  )
}

export default ShowAllProducts 