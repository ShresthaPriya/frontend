import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="w-100 d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #e0f7fa 0%, #f8fafc 60%, #e0f7fa 100%)',
        padding: 0,
        position: "relative",
        overflow: "hidden"
      }}
      id="about"
    >
      {/* Decorative SVG Shape */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "120px",
          zIndex: 0,
          filter: "blur(1px)", // subtle blur for blending
        }}
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C480,160 960,0 1440,80 L1440,120 L0,120 Z"
          fill="#6baed6"
          opacity="0.13"
        />
      </svg>
      <div className="container py-5" style={{ position: "relative", zIndex: 1 }}>
        <div className="row align-items-center g-5">
          {/* Left: Image */}
          <div className="col-lg-6 d-flex justify-content-center">
            <motion.div
              initial={{ x: -80, opacity: 0, rotate: -4 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              // Remove background, padding, and border, only keep maxWidth
              className=""
              style={{
                maxWidth: '600px',
                width: "100%",
              }}
            >
              <img
                src={require('../images/boitumelo-X89VSmdDKE0-unsplash.jpg')}
                alt="About Aakash Labs"
                className="img-fluid rounded-4"
                style={{
                  width: "100%",
                  minHeight: "340px",
                  maxHeight: "520px",
                  objectFit: "cover",
                  boxShadow: "0 12px 48px rgba(107,174,214,0.18)"
                }}
              />
            </motion.div>
          </div>
          {/* Right: Text */}
          <div className="col-lg-6">
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="p-4 bg-white rounded-4 shadow"
              style={{
                minHeight: 340,
                borderLeft: "6px solid #6baed6",
                boxShadow: "0 8px 32px rgba(107,174,214,0.10)",
              }}
            >
              <h2 className="fw-bold mb-3" style={{ color: '#6baed6', fontSize: '2.5rem', letterSpacing: "1px" }}>
                About <span className="text-dark">Aakash Labs</span>
              </h2>
              <p className="lead mb-3" style={{ color: '#444', fontSize: '1.15rem' }}>
                Aakash Labs is a digital branding and marketing agency based in Nepal, helping businesses grow through creative storytelling, design, and data-driven strategies.
              </p>
              <ul className="mb-4 ps-3" style={{ color: '#444', fontSize: '1rem', lineHeight: 1.7 }}>
                <li>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  100+ successful projects delivered
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Expert team in branding, web, and digital marketing
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Trusted by leading brands in Nepal and abroad
                </li>
              </ul>
              <a
                href="https://aakashlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-4 py-2"
                style={{ fontWeight: 500, fontSize: "1.1rem", boxShadow: "0 2px 8px rgba(107,174,214,0.15)" }}
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Decorative SVG Shape Bottom */}
      <svg
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "80px",
          zIndex: 0,
          filter: "blur(1px)", // subtle blur for blending
        }}
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C480,120 960,0 1440,40 L1440,80 L0,80 Z"
          fill="#6baed6"
          opacity="0.09"
        />
      </svg>
    </section>
  );
}
