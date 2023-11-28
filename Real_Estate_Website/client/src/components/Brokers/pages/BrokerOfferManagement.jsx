import React, { useState, useEffect } from "react";
import BrokerOfferCard from "../components/BrokerOfferCard.jsx";
import PropertyCard from "../../PropertyCard/PropertyCard.jsx";
import { useParams } from "react-router-dom";
import { getBrokerOffers, getProperty } from "../../../utils/api.js";

const BrokerOfferManagement = () => {
  const { brokerId } = useParams();
  const [brokerOffers, setBrokerOffers] = useState([]);

  useEffect(() => {
    // Function that fetches all the broker offers and appends to it the properties that have offers
    const fetchBrokerOffers = async () => {
      try {
        const offers = await getBrokerOffers(brokerId);
        const offersWithProperties = await Promise.all(
          offers.map(async (offer) => {
            const property = await getProperty(offer.propertyId);
            return { ...offer, property };
          })
        );
        setBrokerOffers(offersWithProperties);
      } catch (error) {
        console.error("Error fetching broker offers:", error);
      }
    };

    fetchBrokerOffers();
  }, [brokerId]); // Include brokerId in the dependency array to re-fetch offers when it changes

  return (
    <div>
      <h2>Broker Offer Management</h2>
      <div>
        {brokerOffers.map((offer) => (
          <div key={offer.id}>
            <PropertyCard card={offer.property} />
            <BrokerOfferCard offer={offer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrokerOfferManagement;
