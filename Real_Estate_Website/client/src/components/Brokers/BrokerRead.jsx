import React from "react";
import { useQuery } from "react-query";
import { getAllBrokers } from "../../utils/api";
import "./BrokerRead.css";

const SeeBrokers = () => {
  const { data, isError, isLoading, refetch } = useQuery(
    "allBrokers",
    getAllBrokers,
    { refetchOnWindowFocus: false }
  );

  //   return {
  //     data,
  //     isError,
  //     isLoading,
  //     refetch,
  //   };
  return (
    <div className="broker-container">
      <h1>Brokers List</h1>
      {isLoading && <p>Loading brokers...</p>}
      {isError && <p>Error loading brokers data</p>}
      {data && (
        <ul className="broker-group">
          {data.map((broker) => (
            <li className="broker-item" key={broker.id}>
              {broker.name} - {broker.email}
            </li>
          ))}
        </ul>
      )}
      <button onClick={refetch}>Refresh</button>
    </div>
  );
};

export default SeeBrokers;
