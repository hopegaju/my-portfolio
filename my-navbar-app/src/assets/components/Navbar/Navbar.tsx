import React from "react";
import { Link } from "react-router-dom";
import {} from "./Navbar.css";
// Optional if you use React Router for navigation

// Define type for props (if you need to pass props, otherwise you can skip this part)
type NavbarProps = {
  brandName: string;
};

const Navbar: React.FC<NavbarProps> = ({ brandName }) => {
  return (
    <nav style={{ backgroundColor: "#333", padding: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ color: "white", fontSize: "1.5rem" }}>
          {brandName} {/* Display the brand name */}
        </div>
        <div>
          <Link to="/" style={{ color: "white", margin: "0 1rem", textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/about" style={{ color: "white", margin: "0 1rem", textDecoration: "none" }}>
            Web Development project
          </Link>
          <Link to="/services" style={{ color: "white", margin: "0 1rem", textDecoration: "none" }}>
            Content Creation
          </Link>
          <Link to="/contact" style={{ color: "white", margin: "0 1rem", textDecoration: "none" }}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

