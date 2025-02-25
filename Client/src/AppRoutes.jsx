import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from './Layout';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AdminDashBoard from './pages/Admin/AdminDashBoard';
import ShowAllUsers from './pages/Admin/ShowAllUsers';
import ShowAllProducts from './pages/Admin/ShowAllProducts';
import AddProduct from './pages/Admin/AddProduct';
import CartPage from './pages/CartPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import ProtectedRoute from './components/ProtectedRoute';
import EditProduct from './pages/Admin/EditProduct';
import OrderStatusPage from './pages/OrderStatusPage';
import ShowAllOrders from './pages/Admin/ShowAllOrders';
import ProductPage from './pages/ProductPage';


function AppRoutes() {
  return (
    <Routes >
      <Route path='/login' element={<Layout><LoginPage /></Layout>} />
      <Route path='/' element={<Layout hero><Home /></Layout>} />
      <Route path='/productdetails/:productId' element={<Layout><ProductDetailsPage /></Layout>} />
      <Route path='/admin' element={<Layout><AdminDashBoard /></Layout>}>
        <Route path='show-all-users' element={<ShowAllUsers />} />
        <Route path='show-all-products' element={<ShowAllProducts />} />
        <Route path='add-product' element={<AddProduct />} />
        <Route path='edit-product/:productId' element={<EditProduct />} />
        <Route path='show-all-orders' element={<ShowAllOrders/>} />
      </Route>
      <Route
          path="/cart"
          element={
            <Layout>
              <ProtectedRoute element={CartPage} />
            </Layout>
          }
        />
        <Route path='/products' element={<Layout><ProductPage /></Layout>} />
      <Route path='/ordersuccess' element={<Layout><OrderSuccessPage /></Layout>} />
      <Route path='/orders' element={<Layout><OrderStatusPage /></Layout>} />

      <Route path='*' element={<Navigate to={"/"} />} />
    </Routes>
  )
}

export default AppRoutes