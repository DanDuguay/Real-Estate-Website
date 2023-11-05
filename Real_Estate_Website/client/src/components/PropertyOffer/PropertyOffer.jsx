import React, { useState } from "react";
import "./PropertyOffer.css";

function PropertyOffer() {
  const [offer, setOffer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    property: "",
    budget: 100000,
    message: "",
  });

  const handleChange = (event) => {
    setOffer({ ...offer, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(offer);
    // You can add your own logic here to submit the offer to the server
  };

  return (
    <div className="property-offer-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="property-offer-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={offer.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={offer.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={offer.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            value={offer.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="property">Property:</label>
          <select
            name="property"
            value={offer.property}
            onChange={handleChange}
          >
            <option value="">Select a property</option>
            <option value="property1">Property 1</option>
            <option value="property2">Property 2</option>
            <option value="property3">Property 3</option>
          </select>
        </div>
        <div className="form-group">
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
          <span>${offer.budget}</span>
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
}

export default PropertyOffer;
