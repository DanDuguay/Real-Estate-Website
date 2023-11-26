import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBroker, deleteBroker } from "../../../utils/api.js";
import Layout from "../../Layout/Layout.jsx";
//import "./BrokerDelete.css";

const BrokerDelete = () => {
  const { brokerId } = useParams();
  const navigate = useNavigate();

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

  const handleDelete = async () => {
    try {
      await deleteBroker(brokerId);
      navigate("/brokerread"); // Redirect to brokerread after deletion
    } catch (error) {
      console.error("Error deleting Broker:", error);
      // Handle error and show an error message if necessary
    }
  };

  const handleCancel = () => {
    navigate("/brokerread"); // Redirect to brokerread if the user cancels
  };

  return (
    <>
      <Layout />
      <div className="broker-page-body">
        <div className="broker-container">
          <h1>Delete Broker</h1>
          <p>Are you sure you want to delete the following broker?</p>
          <div>
            <label>Name: {brokerData.name}</label>
            <label>Email: {brokerData.email}</label>
            <label>Phone Number: {brokerData.phoneNumber}</label>
            <label>Address: {brokerData.address}</label>
          </div>
          <div>
            <button type="button" onClick={handleDelete}>
              Yes, Delete Broker
            </button>
            <button type="button" onClick={handleCancel}>
              No, Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrokerDelete;
