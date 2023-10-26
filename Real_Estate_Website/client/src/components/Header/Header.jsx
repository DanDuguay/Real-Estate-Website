import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import UserLogin from "../UserLogin/UserLogin.jsx";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={120}></img>
        <nav className="flexCenter h-menu">
          <ul>
            <li>
              <Link to="/">Buy</Link>
            </li>
            <li>
              <Link to="/">Rent</Link>
            </li>
            <li>
              <Link to="/">Broker</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <div className="dropdown">
                <button className="dropbtn button">Login</button>
                <div className="dropdown-content">
                  <Link to="/loginuser">As User</Link>
                  <Link to="/loginbroker">As Broker</Link>
                  <Link to="/loginadmin">As Administrator</Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
export default Header;
