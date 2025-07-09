// src/pages/CheckoutInfo.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import CheckoutProgress from '../components/CheckoutProgress';

export default function CheckoutInfo() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    clearCart();
    navigate('/confirmation', { state: { name: form.name } });
  };

  if (cartItems.length === 0) {
    return <p>Your cart is empty. Please add items first.</p>;
  }

  return (
    <div>
      <CheckoutProgress currentStep={2} />

      <h1>Enter Your Info & Payment</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <fieldset>
          <legend>Personal Information</legend>
          <label>
            Name:
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Address:
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Payment Information</legend>
          <label>
            Card Number:
            <input
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Expiry:
            <input
              name="expiry"
              value={form.expiry}
              onChange={handleChange}
              placeholder="MM/YY"
              required
            />
          </label>
          <label>
            CVV:
            <input
              name="cvv"
              value={form.cvv}
              onChange={handleChange}
              required
            />
          </label>
        </fieldset>
        <button type="submit" style={{ marginTop: '1rem' }}>
          Complete Purchase
        </button>
      </form>
    </div>
  );
}
