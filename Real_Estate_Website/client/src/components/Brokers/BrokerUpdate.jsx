import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to extract route parameters
import { getBroker, updateBroker } from "../../utils/api";

const BrokerUpdate = () => {
  const { brokerId } = useParams(); // Use useParams to get the brokerId from the URL
  const [brokerData, setBrokerData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  // Fetch the broker data using the brokerId
  useEffect(() => {
    // Fetch the broker data using getBroker function with brokerId
    const fetchBrokerData = async () => {
      try {
        console.log(brokerId);
        const data = await getBroker(brokerId);
        setBrokerData(data);
      } catch (error) {
        console.error("Error updating Broker:", error);
      }
    };

    fetchBrokerData();
  }, [brokerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBrokerData({ ...brokerData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await updateBroker(brokerId, brokerData);
      // Handle success, show a message, or navigate to another page
    } catch (error) {
      console.error("Error updating Broker:", error);
    }
  };

  return (
    <div>
      <h1>Update Broker</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={brokerData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={brokerData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={brokerData.phoneNumber}
            onChange={handleChange}
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={brokerData.address}
            onChange={handleChange}
          />
        </label>

        <button type="button" onClick={handleSubmit}>
          Update Broker
        </button>
      </form>
    </div>
  );
};

export default BrokerUpdate;
