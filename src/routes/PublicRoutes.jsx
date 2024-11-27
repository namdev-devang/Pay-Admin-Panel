import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoutes = () => {
  const token = localStorage.getItem('accessToken')

  return !token ? <Outlet /> : <Navigate to={'/home'} />
}

export default PublicRoutes