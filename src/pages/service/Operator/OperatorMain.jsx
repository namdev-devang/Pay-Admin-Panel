import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Airtel from './Airtel'

const OperatorMain = () => {
  return (
    <>
           <h1 className="text-xl font-bold">Operator</h1>
           <Routes>
            <Route path='/airtel' element={<Airtel />}/>
           </Routes>
    </>
  )
}
export default OperatorMain
