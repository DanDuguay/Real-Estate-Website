import React, { useState } from "react";
import "./PropertyOffer.css";
import { submitOffer } from "../../utils/api";

const PropertyOffer = () => {
  const [offer, setOffer] = useState({
    brokerName: "",
    licenseNumber: "",
    agency: "",
    firstName: "",
    email: "",
    buyerAddress: "",
    immovableAddress: "",
    budget: 0,
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOffer({
      ...offer,
      [name]: name === "budget" ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        brokerName: offer.brokerName,
        licenseNumber: offer.licenseNumber,
        agency: offer.agency,
        firstName: offer.firstName,
        email: offer.email,
        buyerAddress: offer.buyerAddress,
        immovableAddress: offer.immovableAddress,
        budget: offer.budget,
        message: offer.message,
      };
      console.log(data);
      await submitOffer(data);

      alert("Offer submitted successfully");
    } catch (error) {
      console.error("Error submitting offer:", error);
    }
  };

  return (
    <div className="property-offer-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="property-offer-form">
        <div className="form-group">
          <label htmlFor="brokerName">Broker Name:</label>
          <input
            type="text"
            name="brokerName"
            value={offer.brokerName}
            onChange={(e) => setOffer({ ...offer, brokerName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="licenseNumber">License Number:</label>
          <input
            type="text"
            name="licenseNumber"
            value={offer.licenseNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="agency">Agency:</label>
          <input
            type="text"
            name="agency"
            value={offer.agency}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Buyer's Name:</label>
          <input
            type="text"
            name="firstName"
            value={offer.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Buyer's Email:</label>
          <input
            type="email"
            name="email"
            value={offer.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="buyerAddress">Buyer's Address:</label>
          <input
            type="text"
            name="buyerAddress"
            value={offer.buyerAddress}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="immovableAddress">Address of the Immovable:</label>
          <input
            type="text"
            name="immovableAddress"
            value={offer.immovableAddress}
            onChange={handleChange}
          />

          <div className="form-group">
            <label htmlFor="budget">Budget:</label>
            <input
              type="range"
              name="budget"
              value={offer.budget}
              min="0"
              max="1000000"
              step="1000"
              onChange={handleChange}
            />
            <span className="budget-number">${offer.budget}</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={offer.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit Offer</button>
      </form>
    </div>
  );
};

export default PropertyOffer;
