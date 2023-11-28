import React, { useState } from "react";
import { useQuery } from "react-query";
import { getAllBrokers } from "../../../utils/api.js";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout.jsx";
import useBrokers from "../components/UseBrokers.jsx";
import BrokerSearch from "../components/BrokerSearch.jsx";
import BrokerCard from "../components/BrokerCard.jsx";

const SeeBrokers = () => {
  const { data, isError, isLoading, refetch } = useBrokers();
  const [searchFilter, setSearchFilter] = useState("");

  // Filter brokers based on the search input
  const filteredBrokers = data
    ? data.filter((broker) => {
        const match =
          (broker.name &&
            broker.name.toLowerCase().includes(searchFilter.toLowerCase())) ||
          (broker.email &&
            broker.email.toLowerCase().includes(searchFilter.toLowerCase()));

        console.log(
          `Broker: ${broker.title}, ${broker.city}, ${broker.country}, Match: ${match}`
        );

        return match;
      })
    : [];

  return (
    <>
      <Layout />
      <div className="body2">
        <div className="broker-container">
          <h1>Brokers List</h1>
          <BrokerSearch filter={searchFilter} setFilter={setSearchFilter} />
          {isLoading && <p>Loading brokers...</p>}
          {isError && <p>Error loading brokers data</p>}
          {filteredBrokers.length > 0 ? (
            <ul className="broker-group">
              {filteredBrokers.map((broker) => (
                <li className="broker-item" key={broker.id}>
                  <BrokerCard broker={broker} />
                  <div className="broker-buttons">
                    <Link to={`/brokerupdate/${broker.id}`}>Update</Link>
                    <Link
                      to={`/brokerDelete/${broker.id}`}
                      style={{ backgroundColor: "rgb(248, 0, 0)" }}
                    >
                      Delete
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No brokers found.</p>
          )}
          <button onClick={refetch}>Refresh</button>
        </div>
      </div>
    </>
  );
};

export default SeeBrokers;
