// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      
      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          Welcome to the Trading Card Store
        </h1>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          Discover, collect, and trade your favorite cards from Pokemon to Magic the Gathering!
        </p>
        <Link
          to="/shop"
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#e63946',
            color: '#fff',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Shop Now
        </Link>
      </section>
      
      <section style={{ backgroundColor: '#f1faee', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🔥 Hot Deals 🔥</h2>
        <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
          For a limited time only, get <strong>20% off</strong> Pokemon packs! Don’t miss out on this rare offer.
        </p>
        <Link
          to="/shop"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#457b9d',
            color: '#fff',
            borderRadius: '4px',
            textDecoration: 'none'
          }}
        >
          Grab the Deal
        </Link>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>About Our Collection</h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>
          Each card is crafted with high-quality materials and features:
        </p>
        <ul style={{ fontSize: '1rem', lineHeight: 1.6, marginLeft: '1.25rem' }}>
          <li><strong>Type</strong>: Pokemon, MtG, and more</li>
          <li><strong>Rarity</strong>: Common, Rare, Legendary</li>
          <li><strong>Condition</strong>: Mint to Played</li>
        </ul>
      </section>
      
      <section style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>We Value Your Feedback</h2>
        <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
          Help us improve! Please take a moment to let us know about your experience.
        </p>
        <Link
          to="/survey"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#2a9d8f',
            color: '#fff',
            borderRadius: '4px',
            textDecoration: 'none'
          }}
        >
          Fill the Survey
        </Link>
      </section>
      
    </div>
  );
}
