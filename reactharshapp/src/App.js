import React from 'react'
import ResturantMap from "./Parent/Child/ResturantMap"
import PaymentPage from "./Pages/PaymentPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
const App = () => {
  
  return (
    

      <BrowserRouter>
      <Routes>

         {/* This shows Resturant page at the root ("/") */}
         <Route path='/' element={<ResturantMap />} />
        <Route path="/payment" element={<PaymentPage />} />


      </Routes>
    </BrowserRouter> 

  )
}

export default App





