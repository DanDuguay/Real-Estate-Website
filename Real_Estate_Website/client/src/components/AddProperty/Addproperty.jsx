import React from "react";
import { useState } from "react";
import "./Addproperty.css";
import { addProperty } from "../../utils/api";

const Addproperty = () => {
  const [propertyData, setPropertyData] = useState({
    title: "",
    description: "",
    price: 0,
    address: "",
    city: "",
    country: "",
    image: null,
    facilities: {
      bedrooms: 0,
    },
    brokerEmail: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPropertyData({
      ...propertyData,
      [name]: name === "facilities" ? JSON.parse(value) : value,
    });
  };

  const handleSubmit = () => {
    try {
      const data = {
        title: propertyData.title,
        description: propertyData.description,
        price: parseInt(propertyData.price, 10),
        address: propertyData.address,
        city: propertyData.city,
        country: propertyData.country,
        image: propertyData.image,
        facilities: { bedrooms: propertyData.facilities.bedrooms },
        brokerEmail: propertyData.brokerEmail,
      };

      addProperty(data);

      alert("Property uploaded successfully");
    } catch (error) {
      console.error("Error uploading property:", error);
    }
  };
  return (
    <div>
      <h1>Add Property</h1>
      <form>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={propertyData.title}
            onChange={handleChange}
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            name="description"
            value={propertyData.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={propertyData.price}
            onChange={handleChange}
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={propertyData.address}
            onChange={handleChange}
          />
        </label>

        <label>
          City:
          <input
            type="text"
            name="city"
            value={propertyData.city}
            onChange={handleChange}
          />
        </label>

        <label>
          Country:
          <input
            type="text"
            name="country"
            value={propertyData.country}
            onChange={handleChange}
          />
        </label>

        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={propertyData.image}
            onChange={handleChange}
          />
        </label>

        <label>
          number of beds:
          <input
            type="number"
            name="facilities"
            value={propertyData.facilities.bedrooms}
            onChange={handleChange}
          />
          <label>
            Broker Email:
            <input
              type="email"
              name="brokerEmail"
              value={propertyData.brokerEmail}
              onChange={handleChange}
            />
          </label>
        </label>
        <button type="button" name="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addproperty;
