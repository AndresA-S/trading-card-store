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
        <header className="container" style={{ paddingTop: 'var(--spacing-md)', paddingBottom: 'var(--spacing-md)', borderBottom: '1px solid var(--color-muted-bg)' }}>
          <nav className="flex" style={{ gap: 'var(--spacing-md)' }}>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/survey">Survey</Link>
          </nav>
        </header>
        <main className="container" style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
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
