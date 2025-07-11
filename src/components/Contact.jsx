import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    if (!validate()) return;
    setLoading(true);
    try {
      // Use jsonplaceholder for testing POST requests
      await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
      setSuccess("Message sent successfully! (Test API)");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(""), 3000); // Hide success message in 3 seconds
    } catch (error) {
      setSuccess("Failed to send message.");
      setTimeout(() => setSuccess(""), 3000); // Hide error message in 3 seconds
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      bg: "primary",
      icon: "map-marker-alt",
      title: "Visit Us",
      content: (
        <>
          Kathmandu, Nepal<br />
          Bagmati Province
        </>
      ),
    },
    {
      bg: "success",
      icon: "phone",
      title: "Call Us",
      content: (
        <>
          +977-1-234-5678<br />
          +977-98-765-4321
        </>
      ),
    },
    {
      bg: "info",
      icon: "envelope",
      title: "Email Us",
      content: (
        <>
          info@abc.com<br />
          support@abc.com
        </>
      ),
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        background: 'linear-gradient(120deg, #e0f7fa 0%, #f8fafc 100%)',
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden"
      }}
      id="contacts"
    >
      {/* Decorative SVG Shape Top */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "120px",
          zIndex: 0,
          pointerEvents: "none"
        }}
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C480,160 960,0 1440,80 L1440,120 L0,120 Z"
          fill="#6baed6"
          opacity="0.12"
        />
      </svg>
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "100px" // Add top padding to push content below the SVG
        }}
      >
        <div className="text-center mb-5">
            <h2
              className="display-4 fw-bold position-relative"
              style={{ color: '#6baed6' }}
            >
              Contact Us
              <span
                style={{
                  display: 'block',
                  height: '4px',
                  width: '80px',
                  backgroundColor: '#6baed6',
                  margin: '10px auto 0',
                  borderRadius: '2px'
                }}
              ></span>
            </h2>
          <p className="lead text-muted">Get in touch with us for any inquiries or collaborations</p>
        </div>

        <div className="row gx-5 gy-4">
          {/* Contact Info */}
          <div className="col-md-4 d-flex flex-column gap-4">
            {contactInfo.map(({ bg, icon, title, content }) => (
              <div
                key={title}
                className="card rounded-4 shadow-sm border-0 flex-grow-1 d-flex"
                style={{ cursor: "default" }}
              >
                <div className="card-body d-flex align-items-center gap-3 p-4">
                  <div
                    className={`bg-${bg} text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0`}
                    style={{ width: 60, height: 60, fontSize: "1.5rem" }}
                    aria-label={title}
                  >
                    <i className={`fas fa-${icon}`} aria-hidden="true"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">{title}</h5>
                    <p className="text-muted mb-0" style={{ lineHeight: 1.3 }}>
                      {content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="col-md-8">
            <div className="card rounded-4 shadow-sm border-0">
              <div className="card-body p-5">
                <h4 className="fw-bold mb-4">Send us a Message</h4>

                {success && (
                  <div
                    className={`alert ${
                      success.includes("successfully") ? "alert-success" : "alert-danger"
                    } alert-dismissible fade show`}
                    role="alert"
                  >
                    <i
                      className={`fas ${
                        success.includes("successfully")
                          ? "fa-check-circle"
                          : "fa-exclamation-triangle"
                      } me-2`}
                      aria-hidden="true"
                    ></i>
                    {success}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className={`form-control form-control-lg${
                            errors.name ? " is-invalid" : ""
                          }`}
                          id="name"
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                        />
                        <label htmlFor="name">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className={`form-control form-control-lg${
                            errors.email ? " is-invalid" : ""
                          }`}
                          id="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                        />
                        <label htmlFor="email">
                          Email Address <span className="text-danger">*</span>
                        </label>
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className={`form-control form-control-lg${
                            errors.message ? " is-invalid" : ""
                          }`}
                          id="message"
                          name="message"
                          placeholder="Tell us about your project or inquiry..."
                          style={{ height: "140px" }}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                        <label htmlFor="message">
                          Message <span className="text-danger">*</span>
                        </label>
                        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                      </div>
                    </div>

                    <div className="col-12 text-end">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg px-5"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane me-2"></i> Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
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
        }}
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C480,120 960,0 1440,40 L1440,80 L0,80 Z"
          fill="#6baed6"
          opacity="0.08"
        />
      </svg>
    </section>
  );
}
