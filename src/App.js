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
import Register from './Components/Login/Register';
import PrivateRoute from './Components/Login/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';


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
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </CartContext>
  );
}

export default App;
