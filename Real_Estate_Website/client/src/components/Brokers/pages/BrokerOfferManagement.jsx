import React, { useState, useEffect } from "react";
import BrokerOfferCard from "../components/BrokerOfferCard.jsx";
import PropertyCard from "../../PropertyCard/PropertyCard.jsx";
import { getBrokerOffers, getProperty } from "../../../utils/api.js";
import useAuth from "../../../hooks/useAuth.jsx";

const BrokerOfferManagement = () => {
  const { auth } = useAuth();
  console.log("auth:", auth);
  const brokerId = auth.id;

  const [brokerOffers, setBrokerOffers] = useState([]);

  useEffect(() => {
    const fetchBrokerOffers = async () => {
      try {
        const offerIds = await getBrokerOffers(brokerId);
        console.log("Offers Ids:", offerIds);
        const offersWithProperties = await Promise.all(
          offerIds.map(async (offer) => {
            if (offer) {
              const property = await getProperty(offer.id);
              offer.brokerName = "Omar Ziad";
              offer.licenseNumber = 69420;
              offer.agency = "Omar's Kingdom";
              console.log("Property:", property);
              return { ...offer, property };
            }
            return offer;
          })
        );
        setBrokerOffers(offersWithProperties);
      } catch (error) {
        console.error("Error fetching broker offers:", error);
      }
    };

    fetchBrokerOffers();
  }, [brokerId]);

  useEffect(() => {
    console.log("Broker Offers: ", brokerOffers);
  }, [brokerOffers]);

  return (
    <div style={{ color: "black" }}>
      <h2>Broker Offer Management</h2>
      <br></br>
      <div>
        {brokerOffers.length > 0 && brokerOffers[0] != "" ? (
          brokerOffers.map((offerId) => (
            <div key={offerId}>
              {offerId.property && <PropertyCard card={offerId.property} />}
              {offerId && <BrokerOfferCard offer={offerId} />}
            </div>
          ))
        ) : (
          <h3>No current offers</h3>
        )}
      </div>
    </div>
  );
};

export default BrokerOfferManagement;
