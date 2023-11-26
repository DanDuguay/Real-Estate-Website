import React from "react";
import { useNavigate } from "react-router-dom";
import placeHolderBrokerImage from "./blank-profile-picture.png";
import "./BrokerCard.css";

const BrokerCard = ({ broker }) => {
  const navigate = useNavigate();

  return (
    <div
      className="broker-card"
      onClick={() => navigate(`../broker/${broker.id}`)}
    >
      {/* TO DO: Add image for broker */}
      <img src={placeHolderBrokerImage} alt="broker" className="broker-image" />
      <div className="broker-info">
        <span className="broker-name">Name: {broker.name || "N/A"}</span>
        <span className="broker-email">Email: {broker.email}</span>
        <span className="broker-role">Role: {broker.role}</span>
      </div>

      <div className="broker-details">
        <span className="details-label">Booked Visits:</span>
        <ul>
          {broker.bookedVisits && broker.bookedVisits.length > 0 ? (
            broker.bookedVisits.map((visit, index) => (
              <li key={index}>{/* TO DO: Display visit details */}</li>
            ))
          ) : (
            <li>No booked visits</li>
          )}
        </ul>
      </div>

      <div className="broker-properties">
        <span className="details-label">Properties Responsible:</span>
        <ul>
          {broker.PropertiesResponsible &&
          broker.PropertiesResponsible.length > 0 ? (
            broker.PropertiesResponsible.map((property, index) => (
              <li key={index}>{property.title}</li>
            ))
          ) : (
            <li>No properties responsible</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BrokerCard;
