// src/components/Features.js
import React from 'react';

export default function Features(){
  return (
    <section className="features">
      <h2>Why Choose Us?</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Quality Products</h3>
          <p>We offer only the best gadgets.</p>
        </div>
        <div className="feature-item">
          <h3>Fast Shipping</h3>
          <p>Get your products quickly.</p>
        </div>
        <div className="feature-item">
          <h3>Customer Support</h3>
          <p>We are here to help 24/7.</p>
        </div>
      </div>
      <hr/>
    </section>
  );
};


