import { Link } from "react-router-dom";
import { FaFlask, FaShoppingCart, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">

        <Link className="navbar-brand" to="/">
          <FaFlask className="me-2" />
          KangYuan <span>Peptides</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services">Custom Synthesis</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>

          <div className="navbar-actions">

            <Link to="/cart" className="nav-icon">
              <FaShoppingCart />
            </Link>

            <Link to="/login" className="nav-icon">
              <FaUser />
            </Link>

            <Link to="/products" className="btn btn-primary">
              Shop Now
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;