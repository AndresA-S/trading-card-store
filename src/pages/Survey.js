// src/pages/Survey.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Survey() {
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // In a real app you'd send this data to your server
    alert('Thank you for your feedback!');
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <h1>Feedback Survey</h1>
      <p>We appreciate your time! Please rate your experience and share any comments.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rating">Overall Experience:</label><br />
          <select
            id="rating"
            value={rating}
            onChange={e => setRating(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          >
            <option value="" disabled>Select a rating</option>
            <option value="5">⭐️⭐️⭐️⭐️⭐️ Excellent</option>
            <option value="4">⭐️⭐️⭐️⭐️ Good</option>
            <option value="3">⭐️⭐️⭐️ Average</option>
            <option value="2">⭐️⭐️ Poor</option>
            <option value="1">⭐️ Very Poor</option>
          </select>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label htmlFor="comments">Comments:</label><br />
          <textarea
            id="comments"
            value={comments}
            onChange={e => setComments(e.target.value)}
            rows="4"
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            placeholder="Your thoughts..."
          />
        </div>
        <button
          type="submit"
          style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#2a9d8f',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}
        >
          Submit Feedback
        </button>
      </form>
    </div>
);
}
