import React from 'react'
import './PropertyCard.css'


const PropertyCard = ({card}) => {
  return (
    <div className="flexColStart r-card">

      
      <img src={card.image} alt="home" />
      <span className="secondaryText r-price">
        <span style={{ color: "black" }}>Price: </span>
        <span>{card.price}$</span>
      </span>
      <span className="customTextClass">Title: {card.title}</span>
      
    </div>
  )
}

export default PropertyCard