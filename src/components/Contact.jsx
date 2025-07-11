import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://formspree.io/f/yourFormId", formData); // Replace with your Formspree endpoint
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSuccess("Failed to send message. This service does not allow direct browser requests (CORS error).");
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
    <section className="py-5" style={{ backgroundColor: "#f1f3f5" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-3">Contact Us</h2>
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
                          className="form-control form-control-lg"
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
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control form-control-lg"
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
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control form-control-lg"
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
    </section>
  );
}
         