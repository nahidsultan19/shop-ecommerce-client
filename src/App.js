import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartContext from './Components/Home/CartContext';
import Home from './Components/Home/Home';
import Footer from './Shared/Footer';
import Header from './Shared/Header';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllProducts from './Components/Home/AllProducts';
import Login from './Components/Login/Login';


function App() {

  return (
    <CartContext>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </CartContext>
  );
}

export default App;
