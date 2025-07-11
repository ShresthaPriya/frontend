// components/Slider.js
import { motion } from "framer-motion";

export default function Slider() {
  return (
    <div id="heroSlider" className="carousel slide" data-bs-ride="carousel">
      {/* Slide Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Slide Inner */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <motion.div
            className="d-flex flex-column flex-md-row align-items-center justify-content-between"
            style={{
              height: '100vh',
              background: "linear-gradient(120deg, #e0f7fa 0%, #f8fafc 100%)",
              overflow: "hidden"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {/* Left: Text Content with Animation */}
            <motion.div
              className="p-5 flex-grow-1"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ zIndex: 2 }}
            >
              <h1 className="display-4 fw-bold mb-3">
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{ color: "#6baed6", display: "inline-block" }}
                >
                  Welcome
                </motion.span>{" "}
                to Aakash Labs
              </h1>
              <motion.h3
                className="h3 mb-3 text-dark"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We build impactful digital experiences
              </motion.h3>
              <motion.p
                className="lead"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Creating innovative solutions for tomorrow's challenges
              </motion.p>
              <motion.div
                className="mt-4 d-flex gap-3"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button className="btn btn-primary btn-lg">Get Started</button>
                <button
                  className="btn btn-outline-primary btn-lg"
                  style={{
                    borderColor: "#0d6efd",
                    color: "#0d6efd",
                    background: "rgba(255,255,255,0.85)"
                  }}
                >
                  Learn More
                </button>
              </motion.div>
            </motion.div>
            {/* Right: Animated Image */}
            <motion.div
              className="flex-grow-1 d-flex justify-content-center align-items-center"
              initial={{ y: -40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              style={{
                height: "100vh",
                width: "100%",
                paddingTop: "60px",
                paddingBottom: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <motion.img
                src={require("../images/vecteezy_landing-page-of-software-development-coding-process-concept_5424801.jpg")}
                alt="Freelance working concept"
                className="img-fluid"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                style={{
                  maxHeight: "75vh",
                  objectFit: "contain",
                  borderRadius: "0",
                  background: "none",
                  boxShadow: "none",
                  marginTop: "40px"
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop" className="d-block w-100" alt="Innovation at Its Core" style={{height: '100vh', objectFit: 'cover'}} />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="display-4 fw-bold">Innovation at Its Core</h1>
            <h3 className="h3 mb-3">Transforming ideas into reality</h3>
            <p className="lead">Cutting-edge technology meets creative design</p>
            <div className="mt-4">
              <button className="btn btn-primary btn-lg me-3">Get Started</button>
              <button className="btn btn-outline-light btn-lg">Learn More</button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop" className="d-block w-100" alt="Your Success, Our Mission" style={{height: '100vh', objectFit: 'cover'}} />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="display-4 fw-bold">Your Success, Our Mission</h1>
            <h3 className="h3 mb-3">Building the future together</h3>
            <p className="lead">Partner with us for exceptional digital solutions</p>
            <div className="mt-4">
              <button className="btn btn-primary btn-lg me-3">Get Started</button>
              <button className="btn btn-outline-light btn-lg">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroSlider" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroSlider" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}