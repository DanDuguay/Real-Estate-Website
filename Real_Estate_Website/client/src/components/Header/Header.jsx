import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";
import UserLogin from "../UserLogin/UserLogin.jsx";
import RequestVisit from "../RequestVisit/RequestVisit.jsx" 

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="./logo.png" alt="logo" width={120}></img>
        </Link>
        
        <nav className="flexCenter h-menu">
          <ul>
            <li>
             <NavLink to="/property">Properties</NavLink>
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
                  <Link to="/RequestVisit">As Broker</Link>
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
