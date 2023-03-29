import React from 'react';
import './App.css';

import Home from './Home';

import Checkout from './Checkout';
import Signin from './Signin';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
<>

    <BrowserRouter>
  
      <Routes>

      <Route path='/' element={<Home />}>
       
      </Route>
          <Route path="/Checkout" element={<Checkout />}>
          </Route>
          <Route path="/sign in" element={<Signin />} >
  
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
