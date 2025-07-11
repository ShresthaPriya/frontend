// components/Slider.js
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
          <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop" className="d-block w-100" alt="Innovation at Its Core" style={{height: '100vh', objectFit: 'cover'}} />
          <div className="carousel-caption d-none d-md-block text-dark">
            <h1 className="display-4 fw-bold text-dark">Welcome to Aakash Labs</h1>
            <h3 className="h3 mb-3 text-dark">We build impactful digital experiences</h3>
            <p className="lead">Creating innovative solutions for tomorrow's challenges</p>
            <div className="mt-4">
              <button className="btn btn-primary btn-lg me-3">Get Started</button>
              <button className="btn btn-outline-light btn-lg">Learn More</button>
            </div>
          </div>
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