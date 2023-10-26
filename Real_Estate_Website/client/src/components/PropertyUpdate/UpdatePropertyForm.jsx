import React, { useState } from 'react';
// import "./UpdatePropertyForm.css"
import { useLocation } from 'react-router-dom'
import { updateProperty } from '../../utils/api';

function UpdatePropertyForm() {

    const {pathname} = useLocation()
    const id = pathname.split("/").slice(-1)[0]
    
  const [propertyData, setPropertyData] = useState({
    title: "",
    description: "",
    price: 0,
    address: "",
    city: "",
    country: "",
    image: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPropertyData({
      ...propertyData,
      [name]: value,
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
            
          };
      console.log(data)
    
      updateProperty(id, data);

      
      alert('Property updated successfully');
    } catch (error) {
      
      console.error('Error updating property:', error);
    }
  };

  return (
    <div>
       
      <h1>Update Property</h1>
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

        


        <button type="button" onClick={
            handleSubmit
        }>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdatePropertyForm;