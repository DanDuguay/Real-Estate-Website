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
        const offers = await getBrokerOffers(brokerId);
        console.log("Offers:", offers);
        const offersWithProperties = await Promise.all(
          offers.map(async (offer) => {
            if (offer.propertyId) {
              const property = await getProperty(offer.propertyId);
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
    <div>
      <h2>Broker Offer Management</h2>
      <div>
        {brokerOffers.length > 0 && brokerOffers[0] != "" ? (
          brokerOffers.map((offer) => (
            <div key={offer.id}>
              {offer.property && <PropertyCard card={offer.property} />}
              {offer && <BrokerOfferCard offer={offer} />}
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
