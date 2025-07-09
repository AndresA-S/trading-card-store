// src/components/CheckoutProgress.js
import React from 'react';

const steps = ['Cart', 'Info & Payment', 'Confirmation'];

export default function CheckoutProgress({ currentStep }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
      {steps.map((label, idx) => {
        const stepNum = idx + 1;
        const isCompleted = currentStep > stepNum;
        const isActive = currentStep === stepNum;
        return (
          <div key={label} style={{ flex: 1, textAlign: 'center' }}>
            <div
              style={{
                margin: '0 auto',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: isCompleted ? '#28a745' : isActive ? '#007bff' : '#ccc',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {stepNum}
            </div>
            <div style={{ marginTop: '0.5rem', color: (isCompleted || isActive) ? '#000' : '#666' }}>
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
