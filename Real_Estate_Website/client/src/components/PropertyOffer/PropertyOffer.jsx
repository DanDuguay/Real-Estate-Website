import React, { useState } from "react";
//import "./PropertyOffer.css";
import { submitPropertyOffer } from "../../utils/api";
import "../Header/all_CSS.css";

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

  const handleChange = (e) => {
    setOffer({ ...offer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitPropertyOffer(offer);

      // Handle the response as needed
      console.log("Response:", response);

      // Reset the form after successful submission
      setOffer({
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
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="property-offer-body">
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
            onChange={(e) =>
              setOffer({ ...offer, licenseNumber: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="agency">Agency:</label>
          <input
            type="text"
            name="agency"
            value={offer.agency}
            onChange={(e) => setOffer({ ...offer, agency: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Buyer's Name:</label>
          <input
            type="text"
            name="firstName"
            value={offer.firstName}
            onChange={(e) => setOffer({ ...offer, firstName: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Buyer's Email:</label>
          <input
            type="email"
            name="email"
            value={offer.email}
            onChange={(e) => setOffer({ ...offer, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="buyerAddress">Buyer's Address:</label>
          <input
            type="text"
            name="buyerAddress"
            value={offer.buyerAddress}
            onChange={(e) =>
              setOffer({ ...offer, buyerAddress: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="immovableAddress">Address of the Immovable:</label>
          <input
            type="text"
            name="immovableAddress"
            value={offer.immovableAddress}
            onChange={(e) =>
              setOffer({ ...offer, immovableAddress: e.target.value })
            }
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
              onChange={(e) => setOffer({ ...offer, budget: e.target.value })}
            />
            <span className="budget-number">${offer.budget}</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={offer.message}
            onChange={(e) => setOffer({ ...offer, message: e.target.value })}
          />
        </div>
        <button type="submit">Submit Offer</button>
      </form>
    </div>
  </div>
  );
};

export default PropertyOffer;
