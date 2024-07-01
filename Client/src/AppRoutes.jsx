import React from 'react'
import { Navigate, Route,Routes } from "react-router-dom";
import { Layout } from './Layout';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import ProductDetailsPage from './pages/ProductDetailsPage';

function AppRoutes() {
  return (
    <Routes >
        <Route path='/login' element={<Layout><LoginPage/></Layout>}/>
        <Route path='/' element={<Layout hero><Home/></Layout>}/>
        <Route path='/productdetails/:productId' element={<Layout><ProductDetailsPage/></Layout>}/>
        <Route path='*' element={<Navigate to={"/"}/>}/>
    </Routes>
  )
}

export default AppRoutes