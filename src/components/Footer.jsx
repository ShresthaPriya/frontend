export default function Footer() {
  return (
    <footer
      className="text-light py-4 mt-5"
      style={{
        backgroundColor: "#6baed6",
        borderTop: "2px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Left: Copyright */}
        <div className="mb-3 mb-md-0 fw-medium">
          &copy; {new Date().getFullYear()} Aakash Labs. All rights reserved.
        </div>

        {/* Right: Social Links */}
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
    </footer>
  );
}
