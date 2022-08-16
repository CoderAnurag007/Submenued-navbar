import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">Navbar</div>
      <div className="menubox">
        <ul>
          <li className="active">Home</li>
          <li className="hoverme">
            About us
            <div className="submenu-1">
              <ul>
                <li>Our History</li>
                <li className="hoverme2">
                  Our Expansion
                  <div className="submenu-2">
                    <ul>
                      <li>International</li>
                      <li>Country</li>
                      <li>Rural</li>
                    </ul>
                  </div>
                </li>
                <li>Our Moto</li>
              </ul>
            </div>
          </li>
          <li className="hoverme">
            Contact us
            <div className="submenu-1">
              <ul>
                <li>Email</li>
                <li className="hoverme2">
                  Mobile
                  <div className="submenu-2">
                    <ul>
                      <li>0000000000</li>
                      <li>1111111111</li>
                      <li>2222222222</li>
                    </ul>
                  </div>
                </li>
                <li>Linkedin</li>
              </ul>
            </div>
          </li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
