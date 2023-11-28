import React from "react";

const BrokerSearch = ({ filter, setFilter }) => {
  return (
    <div className="flexCenter search-bar">
      <input
        placeholder="Search by Name or Email"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "400px",
        }}
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default BrokerSearch;
