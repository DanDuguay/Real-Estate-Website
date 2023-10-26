import {Link} from "react-router-dom";
import "./Broker_CSS.css"
import Header from "../Header/Header.jsx";

const BrokerPage = () => {
    return (
        <div style={{background:"var(--blue)"}}>
            <Header/>
        <body className="broker-page-body">
            <section className="broker-page-section">
                <h1>What would you like to do?</h1>
                <br />
                <p className="broker-page-p">
                    <Link to="/brokercreate" className="broker-page-link">Add Broker</Link>
                    <br />
                    <Link to="/brokerread" className="broker-page-link">See Brokers</Link>
                    <br />
                    <Link to="/brokerupdate" className="broker-page-link">Update Broker</Link>
                    <br />
                    <Link to='/brokerdelete' className="broker-page-link">Delete Broker</Link>
                </p>
            </section>
        </body>
            </div>
    )
}

export default BrokerPage