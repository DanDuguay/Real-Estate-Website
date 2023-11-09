import React, { Component } from 'react';
import {Link} from "react-router-dom";


import { PuffLoader } from 'react-spinners';
import Searching from '../Searching/Searching';

const Brokers = () => {
  const [filter, setFilter] = useState('');
  const { data, isError, isLoading } = useBrokers(); // Use a hook for fetching broker data.

  if (isError) {
    return (
      <div>
        Error while fetching data
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter">
        <PuffLoader />
      </div>
    );
  }

  return (
    <div>
      <div>
        <Layout />
      </div>

      <div className="flexColCenter paddings innerWidth properties-container">
        <Searching filter={filter} setFilter={setFilter} />
        <div className="paddings felxCenter properties">
          {data
            .filter((broker) =>
              broker.name.toLowerCase().includes(filter.toLowerCase()) ||
              broker.id.toLowerCase().include(filter,toLowerCase()) ||
              broker.area.toLowerCase().includes(filter.toLowerCase()) 
              
            )
            .map((card, i) => (
              <BrokerCard broker={card} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Brokers;
