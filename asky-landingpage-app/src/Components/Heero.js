// src/components/Hero.js
import React from 'react';

//import '/bootstrap/dist/css/bootstrap.min.css';

export default function Hero(){
  return (
    <section className="hero">
      <h1 className="hero">Discover the Latest Gadgets</h1>
      <p className='hero'>Get the best deals on the latest electronics.</p>
       <img src="../Images/devises.jpg" alt="image1"/>
      <button className='hero'>Shop Now</button>
    </section>
  );
};

