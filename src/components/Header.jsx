import React from 'react';

export default function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg fixed-top shadow-sm py-3"
        style={{ backgroundColor: '#6baed6' }}
      >
        <div className="container">
          <a
            className="navbar-brand fw-bold fs-3 d-flex align-items-center text-white"
            href="#home"
            style={{ transition: 'color 0.3s ease' }}
            onMouseOver={(e) => (e.target.style.color = '#f8f9fa')}
            onMouseOut={(e) => (e.target.style.color = '#fff')}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"
              alt="Logo"
              width="30"
              height="30"
              className="me-2"
            />
            Aakash Labs
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              <li className="nav-item">
                <a className="nav-link text-white fw-medium px-3" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-medium px-3" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-medium px-3" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-medium px-3" href="#contacts">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="btn btn-light text-primary fw-semibold px-3 rounded-pill"
                  href="/jobs"
                  style={{
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#fff';
                    e.target.style.color = '#0d6efd';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#f8f9fa';
                    e.target.style.color = '#0d6efd';
                  }}
                >
                  Jobs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
  