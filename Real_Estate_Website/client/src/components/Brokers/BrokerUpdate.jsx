import React, { useState } from "react";
import "./UpdateBrokerForm.css";
import { useLocation } from "react-router-dom";
import { updateBroker } from "../../utils/api";

function UpdateBrokerForm() {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];

  const [brokerData, setBrokerData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBrokerData({
      ...brokerData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    try {
      const data = {
        name: brokerData.name,
        email: brokerData.email,
        phoneNumber: brokerData.phoneNumber,
        address: brokerData.address,
      };
      console.log(data);

      updateBroker(id, data); // Call the appropriate API function to update the broker

      alert("Broker updated successfully");
    } catch (error) {
      console.error("Error updating broker:", error);
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
}

export default UpdateBrokerForm;
