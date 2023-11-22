import React from "react";
import { useNavigate } from "react-router-dom";

const BrokerCard = ({ broker }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flexColStart r-card"
      onClick={() => navigate(`../broker/${broker.id}`)}
    >
      {/* TO DO: Add image for broker */}
      <img src="" alt="broker" />
      <span className="customTextClass" style={{ color: "black" }}>
        Broker: {broker.name || "N/A"}
      </span>
      <span className="secondaryText" style={{ color: "black" }}>
        Email: {broker.email}
      </span>
      <span className="secondaryText" style={{ color: "black" }}>
        Role: {broker.role}
      </span>

      <div className="broker-details">
        <span className="secondaryText" style={{ color: "black" }}>
          Booked Visits:
        </span>
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
        <span className="secondaryText" style={{ color: "black" }}>
          Properties Responsible:
        </span>
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
