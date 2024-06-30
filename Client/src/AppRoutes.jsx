import React from 'react'
import { Route,Routes } from "react-router-dom";
import { Layout } from './Layout';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';

function AppRoutes() {
  return (
    <Routes >
        <Route path='/login' element={<Layout><LoginPage/></Layout>}/>
        <Route path='/' element={<Layout hero><Home/></Layout>}/>
    </Routes>
  )
}

export default AppRoutes