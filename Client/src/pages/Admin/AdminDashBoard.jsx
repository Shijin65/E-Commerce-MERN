import React, { useContext } from 'react'
import { useEffect } from 'react'
import AuthContext from '../../context/Authcontext'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminMenu from './AdminMenu'

const AdminDashBoard = () => {
    const {user}=useContext(AuthContext)
    const Navigate = useNavigate()
    useEffect(() => {
     if(!user || user?.role === "0"){
        Navigate("/", { replace: true })
     }
    }, [user])
    
  return (
    <div className='md:px-16'>
      <div className='grid md:grid-cols-12  gap-5 content-center place-items-center '>
        <div className='md:col-span-3'><AdminMenu /></div>
        <div className='md:col-span-9 w-full h-[80vh]  overflow-scroll'><Outlet/></div>
      </div>
    </div>
  )
}

export default AdminDashBoard