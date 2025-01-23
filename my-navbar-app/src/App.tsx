import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Navbar/Navbar"; // Import the Navbar component
import about from "./assets/components/About/About";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar brandName="MyBrand" /> {/* Pass the brand name as a prop */}
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/services" element={<h2>Content Creation</h2>} />
          <Route path="/contact" element={<h2>Contact Page</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
