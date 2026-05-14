import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        ClinicFlow
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/services">Services</Link>

        <Link to="/book">Book</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/login">Login</Link>

      </div>

    </nav>
  );
}

export default Navbar;