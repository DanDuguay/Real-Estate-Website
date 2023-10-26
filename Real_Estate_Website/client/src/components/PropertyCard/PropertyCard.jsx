import React from 'react'
import './PropertyCard.css'
import { useNavigate } from 'react-router-dom'


const PropertyCard = ({card}) => {

  const navigate = useNavigate();
  return (
    <div className="flexColStart r-card"
    onClick={() => navigate(`../property/${card.id}`)}>

      
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