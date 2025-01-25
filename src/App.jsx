import React from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
// import Home from './Components/Home';
import Login from './Components/Login';
import DashBoard from './Components/DashBoard';
import NavBar from './Components/NavBar';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import { AuthProvider } from './auth/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col">
                <NavBar />
                <DashBoard />
                <Footer />
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;