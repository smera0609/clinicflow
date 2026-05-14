import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">

          <h2>ClinicFlow</h2>

          <p>
            Smart appointment and lead management platform
            for clinics and coaching centers.
          </p>

        </div>

        <div className="footer-section">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/services">Services</Link>

          <Link to="/book">Book</Link>

          <Link to="/contact">Contact</Link>

        </div>

        <div className="footer-section">

          <h3>Contact</h3>

          <p>Email: support@clinicflow.com</p>

          <p>Phone: +91 9876543210</p>

          <p>Location: Coimbatore, India</p>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 ClinicFlow. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;