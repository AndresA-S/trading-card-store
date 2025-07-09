// src/pages/OrderConfirmation.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import CheckoutProgress from '../components/CheckoutProgress';

export default function OrderConfirmation() {
  const { state } = useLocation();
  const customerName = state?.name || 'Customer';

  return (
    <div>
      <CheckoutProgress currentStep={3} />

      <h1>Thank You, {customerName}!</h1>
      <p>Your order has been confirmed. We’ll send you a confirmation email shortly.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
}
