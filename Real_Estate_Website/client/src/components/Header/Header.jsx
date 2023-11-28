import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import "./all_CSS.css";
//import "./Header.css";
import UserLogin from "../Login/UserLogin.jsx";

import Addproperty from "../AddProperty/Addproperty.jsx"
import useAuth from "../../hooks/useAuth.jsx"


const Header = () => {
  const {auth} = useAuth();
  const {setAuth} = useAuth();

  const handleOnClick = async (e) =>{
    setAuth();
  }

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="../../../public/logo.png" alt="logo" width={120}></img>
        </Link>
        
        <nav className="flexCenter h-menu">
          <ul>
            <li>
             <NavLink to="/property">Properties</NavLink>
            </li>

            <li>
              {auth?.role?.find(role => ["Admin","Broker"].includes(role)) ? <NavLink to="/property/create">Add Property</NavLink>: null}
            </li>
            
           
            <li>
              {auth?.role?.find(role => ["Admin", "Broker","User"].includes(role))? <Link to="/brokerpage">Brokers</Link> : null}
            </li>
            
            <li>
              {auth?.role?.find(role => ["Admin","User"].includes(role))? <Link to="/userprofile">User Profile</Link> : null}
            </li>
            <li>
              {auth?.role?.find(role => ["Admin", "Broker", "User"].includes(role))
                  ? <button className="dropbtn button" onClick={handleOnClick}>Log Out</button>
              :
              <div className="dropdown">
                <button className="dropbtn button">Login</button>
                <div className="dropdown-content">
                  <Link id="userloginlink" to="/user/loginuser">As User</Link>
                  <Link id="brokerloginlink" to="/user/loginbroker">As Broker</Link>
                  <Link id="adminloginlink" to="/user/loginadmin">As Administrator</Link>
                </div>
              </div>
              }
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
export default Header;
