// src/pages/Checkout.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CheckoutProgress from '../components/CheckoutProgress';

export default function Checkout() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <CheckoutProgress currentStep={1} />

      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map(item => (
              <li key={item.id} style={{ marginBottom: '1rem' }}>
                <span>
                  {item.name} (x{item.quantity}) — ${ (item.price * item.quantity).toFixed(2) }
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{ marginLeft: '1rem' }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <p>
            <strong>Total:</strong> ${ total.toFixed(2) }
          </p>

          <button onClick={clearCart}>Clear Cart</button>
          <Link
            to="/checkout/info"
            style={{
              marginLeft: '1rem',
              padding: '0.5rem 1rem',
              textDecoration: 'none',
              backgroundColor: '#007bff',
              color: '#fff',
              borderRadius: '4px'
            }}
          >
            Proceed to Info
          </Link>
        </>
      )}
    </div>
  );
}
