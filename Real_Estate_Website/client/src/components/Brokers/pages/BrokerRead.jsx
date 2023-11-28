import React from "react";
import { useQuery } from "react-query";
import { getAllBrokers } from "../../../utils/api.js";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout.jsx";
import useBrokers from "../components/UseBrokers.jsx";
import Searching from "../../Searching/Searching.jsx";
import BrokerCard from "../components/BrokerCard.jsx"; // Import your BrokerCard component
import useAuth from "../../../hooks/useAuth.jsx";

const SeeBrokers = () => {
    const { auth } = useAuth();
  const { data, isError, isLoading, refetch } = useBrokers();
  return (
    <>
      <Layout />
      <div className="body2">
        <div className="broker-container">
          <h1>Brokers List</h1>
          {isLoading && <p>Loading brokers...</p>}
          {isError && <p>Error loading brokers data</p>}
          {data && (
            <ul className="broker-group">
              {data.map((broker) => (
                <li className="broker-item" key={broker.id}>
                  <BrokerCard broker={broker} />
                    {auth?.role?.find(role => ["Admin"].includes(role)) ? <div className="broker-buttons">
                    <Link to={`/brokerupdate/${broker.id}`}>Update</Link>
                    <Link
                      to={`/brokerDelete/${broker.id}`}
                      style={{ backgroundColor: "rgb(248, 0, 0)" }}
                    >
                      Delete
                    </Link>
                  </div> : null }
                </li>
              ))}
            </ul>
          )}
          <button onClick={refetch}>Refresh</button>
        </div>
      </div>
    </>
  );
};

export default SeeBrokers;
