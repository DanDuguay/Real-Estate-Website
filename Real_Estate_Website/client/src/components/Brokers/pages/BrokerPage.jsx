import { Link } from "react-router-dom";
//import "./Broker_CSS.css";
import Header from "../../Header/Header.jsx";

const BrokerPage = () => {
  return (
    <>
      <div style={{ background: "var(--blue)" }}>
        <Header />
        <div className="broker-page-body">
          <section className="broker-page-section">
            <h1>What would you like to do?</h1>
            <br />
            <p className="broker-page-p">
              <Link to="/brokercreate" className="broker-page-link">
                Add Broker
              </Link>
              <br />
              <Link to="/brokerread" className="broker-page-link">
                See Brokers
              </Link>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default BrokerPage;
