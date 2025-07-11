export default function Footer() {
  return (
    <footer
      className="text-light py-4 mt-5 border-top"
      style={{
        backgroundColor: "#6baed6",
      }}
    >
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Logo and Brand */}
          <div className="col-12 col-md-4 text-center text-md-start mb-3 mb-md-0">
            <a
              className="navbar-brand fw-bold fs-4 d-flex align-items-center justify-content-center justify-content-md-start text-white"
              href="#home"
              style={{ transition: 'color 0.3s ease' }}
              onMouseOver={(e) => (e.target.style.color = '#f8f9fa')}
              onMouseOut={(e) => (e.target.style.color = '#fff')}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"
                alt="Logo"
                width="32"
                height="32"
                className="me-2 rounded-circle border border-2 border-white"
                style={{ background: "#fff" }}
              />
              <span className="d-none d-sm-inline">Aakash Labs</span>
            </a>
            <div className="small mt-2">
              &copy; {new Date().getFullYear()} Aakash Groups. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
            <div className="fw-bold mb-2" style={{ letterSpacing: "1px" }}>
              Quick Links
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <a href="#about" className="text-white text-decoration-none px-2">About</a>
              <a href="#team" className="text-white text-decoration-none px-2">Team</a>
              <a href="#contacts" className="text-white text-decoration-none px-2">Contact</a>
              <a href="/jobs" className="text-white text-decoration-none px-2">Jobs</a>
            </div>
            <div className="fw-bold mt-3 mb-2" style={{ letterSpacing: "1px" }}>
              Get Connected
            </div>
            <div>
              {[
                {
                  href: "https://facebook.com/aakashlabs",
                  label: "Facebook",
                  icon: "bi-facebook",
                },
                {
                  href: "https://twitter.com/aakashlabs",
                  label: "Twitter",
                  icon: "bi-twitter",
                },
                {
                  href: "https://linkedin.com/company/aakashlabs",
                  label: "LinkedIn",
                  icon: "bi-linkedin",
                },
                {
                  href: "https://instagram.com/aakashlabs",
                  label: "Instagram",
                  icon: "bi-instagram",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white fs-4 me-3"
                  aria-label={social.label}
                  style={{ transition: "color 0.3s ease" }}
                  onMouseOver={(e) => (e.target.style.color = "#f8f9fa")}
                  onMouseOut={(e) => (e.target.style.color = "#ffffff")}
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-4 text-center text-md-end small">
            <div className="mb-2">
              <i className="bi bi-geo-alt-fill me-2"></i>
              Kathmandu, Nepal
            </div>
            <div className="mb-2">
              <i className="bi bi-envelope-fill me-2"></i>
              info@abc.com
            </div>
            <div>
              <i className="bi bi-telephone-fill me-2"></i>
              +977-1-234-5678
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
        <div className="text-end small">
          <div>
            <i className="bi bi-geo-alt-fill me-2"></i>
            Kathmandu, Nepal
          </div>
          <div>
            <i className="bi bi-envelope-fill me-2"></i>
            info@abc.com
          </div>
          <div>
            <i className="bi bi-telephone-fill me-2"></i>
            +977-1-234-5678
          </div>
        </div>
   
