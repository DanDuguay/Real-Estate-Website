import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout.jsx";
//import "./Broker_CSS.css";
import Header from "../../Header/Header.jsx";
import useAuth from "../../../hooks/useAuth.jsx";

const BrokerPage = () => {
  const {auth} = useAuth();
  return (
    <>
      <Layout />
      <div style={{ background: "var(--blue)" }}>
        <div className="broker-page-body">
          <section className="broker-page-section">
            <h1>What would you like to do?</h1>
            <br />
            <p className="broker-page-p">
              {auth?.role?.find(role => ["Admin"].includes(role))?
              <Link to="/brokercreate" className="broker-page-link">
                Add Broker
              </Link> : null}
              <br />
              <Link to="/brokerread" className="broker-page-link">
                View All Brokers
              </Link>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default BrokerPage;
