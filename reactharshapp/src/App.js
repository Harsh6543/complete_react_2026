import React from 'react'
import Resturant from "./Parent/Child/Resturant"
import PaymentPage from "./Pages/PaymentPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
const App = () => {
  return (

      <BrowserRouter>
      <Routes>

         {/* This shows Resturant page at the root ("/") */}
        <Route path="/" element={<Resturant />} />
        <Route path="/payment" element={<PaymentPage />} />


      </Routes>
    </BrowserRouter>

  )
}

export default App





