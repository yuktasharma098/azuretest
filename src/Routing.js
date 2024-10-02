 import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
 
 function Routing() {
   return (
  <BrowserRouter>
  <Routes>
    <Route path="/yukta-portfolio" element={<Main/>}/>
    <Route path='/' element={<Navigate to="/yukta-portfolio" replace/>}/>
  </Routes>
  </BrowserRouter>
   )
 }
 
 export default Routing