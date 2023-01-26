import React, { useEffect } from 'react'

import { Navigate, useNavigate } from 'react-router-dom'

function Dashboard({user}) {
 
  const navigate = useNavigate();

  useEffect (() => {

if(!user){
  navigate("/login")
}
  },[])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard