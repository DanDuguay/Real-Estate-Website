import React from "react";
import { acceptBrokerOffer, declineBrokerOffer } from "../../../utils/api";

const BrokerOfferCard = ({ offer }) => {
  const handleAccept = async () => {
    try {
      await acceptBrokerOffer(offer.id);
    } catch (error) {
      console.error("Error accepting offer:", error);
    }
  };

  const handleDecline = async () => {
    try {
      await declineBrokerOffer(offer.id);
    } catch (error) {
      console.error("Error declining offer:", error);
    }
  };

  return (
    <div>
      <h3>Offer Details</h3>
      <p>Broker Name: {offer.brokerName}</p>
      <p>License Number: {offer.licenseNumber}</p>
      <p>Agency: {offer.agency}</p>
      {/* Include other offer details as needed */}

      <div>
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
};

export default BrokerOfferCard;
