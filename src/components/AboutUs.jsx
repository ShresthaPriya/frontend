import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="container py-5 d-flex flex-column flex-lg-row align-items-center gap-5" style={{ minHeight: '80vh' }}>
      
      {/* Left Text Content */}
      <motion.div 
        className="flex-grow-1"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="display-4 fw-bold mb-4">
          <span style={{ color: '#6baed6' }}>Growth</span> <br />
          goes beyond <span className="text-black">business</span>
         
        </h1>
        <p className="lead mb-4" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
          We are shaping a better Nepal by creating jobs, inspiring young leaders, and building sustainably.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#444' }}>
          Established over a century ago, Aakash Group began as a pioneering importer of textiles and electronics. Today, we're a diversified powerhouse shaping lives across food & hospitality, real estate, insurance, capital markets, IT, and beyond. 
        </p>
      </motion.div>

      {/* Right Image / Graphic */}
      <motion.div 
        className="flex-grow-1 d-flex justify-content-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={require('../images/boitumelo-X89VSmdDKE0-unsplash.jpg')} 
          alt="Innovation Graphic"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
        />
      </motion.div>
    </section>
  );
}
