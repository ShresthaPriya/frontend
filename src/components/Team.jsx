import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #e0f7fa 0%, #f8fafc 60%, #e0f7fa 100%)",
        position: "relative",
        overflow: "hidden"
      }}
      id="team"
    >
      
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row">
          <div className="col-12 text-center mb-5">
           <h2
              className="display-4 fw-bold position-relative"
              style={{ color: '#6baed6' }}
            >
              Our Team
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

            <p className="lead text-dark mt-3" data-aos="fade-up">
              Meet the talented individuals behind our success
            </p>

          </div>
        </div>
        <div className="row g-4">
          {/* Team Member 1 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="card h-100 shadow-lg border-0 rounded-4 transition hover-shadow">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=600&auto=format&fit=crop&q=60"
                    alt="Anna Shrestha"
                    className="rounded-circle border border-3 border-none"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                </div>
                <h5 className="card-title fw-bold text-dark">Anna Shrestha</h5>
                <p className="text-primary fw-semibold">CEO</p>
                <p className="text-muted">Leading the vision and strategy for innovative digital solutions.</p>
              </div>
              
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="card h-100 shadow-lg border-0 rounded-4 transition hover-shadow">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    alt="Prince Shrestha"
                    className="rounded-circle border border-3 border-none"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                </div>
                <h5 className="card-title fw-bold text-dark">Prince Shrestha</h5>
                <p className="text-primary fw-semibold">Creative Director</p>
                <p className="text-muted">Crafting beautiful and intuitive user experiences that captivate audiences.</p>
              </div>
              
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="card h-100 shadow-lg border-0 rounded-4 transition hover-shadow">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcYWVR2jRGqaOZIazu4zyY66QxWQbx0ezwKkDlgttBWKEf6dgHPHcaebAYRxGTiBsGTw&usqp=CAU"
                    alt="Saroj Shrestha"
                    className="rounded-circle border border-3 "
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                </div>
                <h5 className="card-title fw-bold text-dark">Priya Shrestha</h5>
                <p className="text-primary fw-semibold">Developer</p>
                <p className="text-muted">Building robust and scalable applications with cutting-edge technology.</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
