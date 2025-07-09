// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import CheckoutInfo from './pages/CheckoutInfo';
import OrderConfirmation from './pages/OrderConfirmation';
import Survey from './pages/Survey';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <nav>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/shop" style={{ marginRight: '1rem' }}>Shop</Link>
            <Link to="/checkout" style={{ marginRight: '1rem' }}>Checkout</Link>
            <Link to="/survey">Survey</Link>
          </nav>
        </header>
        <main style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/info" element={<CheckoutInfo />} />
            <Route path="/confirmation" element={<OrderConfirmation />} />
            <Route path="/survey" element={<Survey />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;
