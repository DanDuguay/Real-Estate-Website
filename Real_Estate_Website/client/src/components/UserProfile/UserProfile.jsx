import React, { useState, useEffect } from "react";
import "./UserProfile.css"; // Import the CSS file directly
import Layout from "../Layout/Layout";

const UserProfile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch user data from API and set it to the state
    const fetchUser = async () => {
      const response = await fetch("https://api.example.com/user/1");
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, []);

  return (
    <div
    
      className="user-profile"
      style={{ backgroundImage: `url(${user.backgroundImage})` }}
    >
      <div>
        <Layout/>
      </div>
      <div className="user-profile-header">
        <div className="profile-picture-container">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="profile-picture"
          />
        </div>
        <h1>{user.name}</h1>
      </div>
      <div className="user-profile-body">
        <h2>About Me</h2>
        <p>{user.about}</p>
        <h2>Contact Information</h2>
        <ul>
          <li>Email: {user.email}</li>
          <li>Phone: {user.phone}</li>
          <li>Address: {user.address}</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
