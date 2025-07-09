// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <section style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h1 style={{ fontSize: 'var(--font-size-xl)' }}>Welcome to the Trading Card Store</h1>
        <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 1.6 }}>
          Discover, collect, and trade your favorite cards from Pokemon to Magic the Gathering!
        </p>
        <Link
          to="/shop"
          className="primary"
          style={{ display: 'inline-block', marginTop: 'var(--spacing-md)', textDecoration: 'none' }}
        >
          Shop Now
        </Link>
      </section>

      <section style={{ backgroundColor: 'var(--color-muted-bg)', padding: 'var(--spacing-md)', borderRadius: '8px', marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ fontSize: 'var(--font-size-lg)' }}>🔥 Hot Deals 🔥</h2>
        <p style={{ fontSize: 'var(--font-size-base)', marginBottom: 'var(--spacing-md)' }}>
          For a limited time only, get <strong>20% off</strong> Pokemon packs! Don’t miss out on this rare offer.
        </p>
        <Link to="/shop" className="accent" style={{ textDecoration: 'none' }}>
          Grab the Deal
        </Link>
      </section>

      <section style={{ marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ fontSize: 'var(--font-size-lg)' }}>About Our Collection</h2>
        <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 1.6 }}>
          Each pack is crafted with high-quality materials and features:
        </p>
        <ul style={{ fontSize: 'var(--font-size-base)', lineHeight: 1.6, marginLeft: 'var(--spacing-md)' }}>
          <li><strong>Type</strong>: Pokemon, MtG, and more</li>
          <li><strong>Rarity</strong>: Common, Rare, and more</li>
          <li><strong>Condition</strong>: Mint to Played</li>
        </ul>
      </section>

      <section style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'var(--font-size-lg)' }}>We Value Your Feedback</h2>
        <p style={{ fontSize: 'var(--font-size-base)', marginBottom: 'var(--spacing-md)' }}>
          Help us improve! Please take a moment to let us know about your experience.
        </p>
        <Link to="/survey" className="accent" style={{ textDecoration: 'none' }}>
          Fill the Survey
        </Link>
      </section>
    </div>
  );
}
