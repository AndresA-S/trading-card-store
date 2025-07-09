// src/pages/Shop.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import card1 from '../assets/images/card1.jpg';
import card2 from '../assets/images/card2.jpg';

const products = [
  {
    id: 1,
    name: 'Pokemon Card Pack',
    price: 14.99,
    image: card1,
    description: 'All your favorite pokemon in this pack!',
    type: 'Pokemon',
    rarity: 'Rare',
  },
  {
    id: 2,
    name: 'Magic the Gathering Pack',
    price: 12.49,
    image: card2,
    description: 'A collection of powerful Magic cards.',
    type: 'Magic the Gathering',
    rarity: 'Common',
  },
];

// derive the distinct facet options
const types = [...new Set(products.map(p => p.type))];
const rarities = [...new Set(products.map(p => p.rarity))];

export default function Shop() {
  const { addToCart } = useCart();
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedRarities, setSelectedRarities] = useState([]);

  const toggleType = (type) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleRarity = (rarity) => {
    setSelectedRarities(prev =>
      prev.includes(rarity) ? prev.filter(r => r !== rarity) : [...prev, rarity]
    );
  };

  const filtered = products.filter(p =>
    (selectedTypes.length === 0 || selectedTypes.includes(p.type)) &&
    (selectedRarities.length === 0 || selectedRarities.includes(p.rarity))
  );

  return (
    <div>
      <h1>Shop</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        
        <aside style={{ minWidth: '200px' }}>
          <div>
            <h2>Filter by Type</h2>
            {types.map(type => (
              <label key={type} style={{ display: 'block' }}>
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => toggleType(type)}
                />
                {type}
              </label>
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <h2>Filter by Rarity</h2>
            {rarities.map(rarity => (
              <label key={rarity} style={{ display: 'block' }}>
                <input
                  type="checkbox"
                  checked={selectedRarities.includes(rarity)}
                  onChange={() => toggleRarity(rarity)}
                />
                {rarity}
              </label>
            ))}
          </div>
        </aside>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {filtered.map(product => (
            <div
              key={product.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '1rem',
                width: '200px',
                textAlign: 'center',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: 'auto', marginBottom: '0.5rem' }}
              />
              <h2 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>
                {product.name}
              </h2>
              <p style={{ margin: '0.5rem 0' }}>
                ${product.price.toFixed(2)}
              </p>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>
                {product.description}
              </p>
              <button
                onClick={() => addToCart(product)}
                style={{ marginTop: '0.5rem', padding: '0.5rem 1rem' }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}