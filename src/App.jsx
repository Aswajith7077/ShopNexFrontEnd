import React from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import DashBoard from './Components/DashBoard';
import NavBar from './Components/NavBar';
import Products from './Components/Products';
import Footer from './Components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <div className="flex flex-col">
              <NavBar />
              <DashBoard />
              <Footer />
            </div>
          }
        />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;