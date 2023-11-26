import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout.jsx";
import { useParams } from "react-router-dom";
import { getBroker } from "../../../utils/api.js";
import BrokerCard from "../components/BrokerCard";

const BrokerProfile = () => {
  const { brokerId } = useParams();

  const [brokerData, setBrokerData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    const fetchBrokerData = async () => {
      try {
        const data = await getBroker(brokerId);
        setBrokerData(data);
      } catch (error) {
        console.error("Error fetching Broker:", error);
      }
    };

    fetchBrokerData();
  }, [brokerId]);

  return (
    <>
      <Layout />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
          Broker Profile
        </h1>
        <BrokerCard
          broker={brokerData}
          style={{ maxWidth: "400px", width: "100%" }}
        />
      </div>
    </>
  );
};

export default BrokerProfile;
