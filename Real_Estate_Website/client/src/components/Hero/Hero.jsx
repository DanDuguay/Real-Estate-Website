
import React from 'react'
import './Hero.css'
import Header from '../Header/Header';
import Layout from '../Layout/Layout';



export const Hero = () => {

  return (
    <div>
      <div>
        <Layout/>
      </div>

      <div className="video-wrap">
        <video autoPlay loop muted className="custom-video" poster="">
          <source src="./Hero_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
        </video>
      </div>

      <div className="animated-statement">
        <p >
          <h2>Welcome to </h2> <h1><strong> LOJMJD, INC.</strong></h1>
          <h2> Unlock Your Ideal Property, <br /> Whether Buying or Renting </h2>
        </p>
      </div>

    </div>
  )
}


