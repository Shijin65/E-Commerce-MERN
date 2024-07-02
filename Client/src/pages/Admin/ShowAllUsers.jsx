import React, { useContext, useEffect, useState } from 'react'
import UserCard from '../../components/UserCard'
import AuthContext from '../../context/Authcontext'
const VITE_API_URL = import.meta.env.VITE_API_URL;
const ShowAllUsers = () => {
  const [usersData,setuserData]=useState([])
  const {user} = useContext(AuthContext)
  const id=user?.id

  // const UsersData=[1,1,1,1,1,1]
  useEffect(() => {
    if (user) {
      getUsersData1()
    }
    
  }, [user])
  
  const getUsersData1 = async () => {
  
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth")}`
      },
    });
    const userres = await response.json();
    if (!userres.error) {
      console.log(userres.Allusers)
      setuserData(userres.Allusers)
    }else{
      console.log("some thing happend while fetching")
    }
  }
  return (
    <div className='w-full flex gap-5 flex-wrap justify-center'>
        {usersData?.map((item,index)=><UserCard item={item} key={index}/>)}
    </div>
  )
}

export default ShowAllUsers